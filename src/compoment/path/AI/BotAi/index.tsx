import React, { useState } from "react";
import styles from "./ChatBot.module.scss";

interface Service {
  id: number;
  name: string;
  description: string;
}

const services: Service[] = [
  { id: 1, name: "Web Design", description: "Professional web design services." },
  { id: 2, name: "Server Rental", description: "Affordable server rentals." },
  { id: 3, name: "Maintenance", description: "Maintenance for servers, web, and software." },
  { id: 4, name: "Computer Accessories", description: "Sales and setup of computer accessories." },
  { id: 5, name: "Football Apparel", description: "Wide range of football apparel." },
  { id: 6, name: "Fashion Accessories", description: "Trendy fashion accessories." },
  { id: 7, name: "Beauty & Spa Products", description: "Exclusive beauty and spa products." },
];

interface Message {
  sender: "bot" | "user";
  text: string;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]); // Lưu lịch sử trò chuyện
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    // Tạo tin nhắn mới từ người dùng
    const userMessage: Message = { sender: "user", text: userInput };

    // Tìm kiếm dịch vụ phù hợp
    let botResponseText = "I'm sorry, I didn't understand your query. Can you ask about a specific service?";
    for (let i = 0; i < services.length; i++) {
      if (userInput.toLowerCase().includes(services[i].name.toLowerCase())) {
        botResponseText = `${services[i].name}: ${services[i].description}`;
        break;
      }
    }

    // Tạo phản hồi của bot
    const botMessage: Message = { sender: "bot", text: botResponseText };

    // Cập nhật danh sách tin nhắn
    const newMessages = [...messages, userMessage, botMessage];
    setMessages(newMessages);

    // Reset ô nhập liệu
    setUserInput("");
  };

  return (
    <div className={styles.chatBot}>
      <div className={styles.chatWindow}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${message.sender === "bot" ? styles.bot : styles.user}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className={styles.inputArea}>
        <input
          type="text"
          placeholder="Ask about our services..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
