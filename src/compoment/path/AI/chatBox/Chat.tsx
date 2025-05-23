import React, { useState } from "react";
import styles from "./Chat.module.scss";
import { FaCommentDots, FaTimes } from "react-icons/fa";

const Chat: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const sendToChatGPT = async () => {
    if (!apiKey) {
      setResponse("API key không được tìm thấy.");
      return;
    }

    setLoading(true);
    setResponse("Đang xử lý...");

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setResponse(`Lỗi ${res.status}: ${data.error?.message || "Không xác định"}`);
        return;
      }

      setResponse(data.choices?.[0]?.message?.content || "Không có phản hồi.");
    } catch (error) {
      setResponse("Đã xảy ra lỗi khi kết nối với API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.chatButton} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaCommentDots />}
      </div>

      {isOpen && (
        <div className={styles.chatBox}>
          <h4>🧠 Trợ lý AI</h4>
          <textarea
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Nhập câu hỏi..."
          />
          <button onClick={sendToChatGPT} disabled={loading}>
            {loading ? "Đang gửi..." : "Gửi"}
          </button>
          <div className={styles.response}>{response}</div>
        </div>
      )}
    </>
  );
};

export default Chat;
