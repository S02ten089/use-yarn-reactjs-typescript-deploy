import { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';

// Kiểu dữ liệu cho 1 tin nhắn
interface Message {
  id: number;
  content: string;
  created_at: string;
}

export default function AnonymousBoard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [content, setContent] = useState<string>('');

  // Gọi API lấy danh sách tin nhắn
  const fetchMessages = async () => {
    try {
      const res = await axios.get<Message[]>('https://vtt-s02.com/chat/get_messages.php');
      setMessages(res.data);
    } catch (error) {
      console.error('Lỗi khi tải tin nhắn:', error);
    }
  };

  // Gửi tin nhắn mới
  const sendMessage = async () => {
    if (!content.trim()) return;

    try {
      await axios.post(
        'https://vtt-s02.com/chat/post_message.php',
        { content },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setContent('');
      fetchMessages(); // Tải lại danh sách sau khi gửi
    } catch (error) {
      console.error('Lỗi khi gửi tin nhắn:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Xử lý khi người dùng gõ vào textarea
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>🕵️ Thảo luận ẩn danh</h2>

      <textarea
        value={content}
        onChange={handleChange}
        rows={4}
        cols={50}
        placeholder="Viết gì đó (ẩn danh)..."
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <br />

      <button onClick={sendMessage} style={{ padding: '8px 16px' }}>
        Gửi
      </button>

      <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '20px' }}>
        {messages.map((msg) => (
          <li key={msg.id} style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '8px' }}>
            <p style={{ margin: 0 }}>{msg.content}</p>
            <small>{new Date(msg.created_at).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
