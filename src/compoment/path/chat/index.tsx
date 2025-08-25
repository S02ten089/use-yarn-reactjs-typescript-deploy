import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios, { AxiosError } from 'axios';
import AppMenu from './menu';

// Constants
const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_LINK_SERVER || '',
  ENDPOINTS: {
    GET_MESSAGES: process.env.REACT_APP_API_LINK_GET_CHAT || '',
    POST_MESSAGE: process.env.REACT_APP_API_LINK_POST_CHAT || '',
  },
};

// Interfaces
interface Message {
  id: number;
  content: string;
  created_at: string;
}

interface ApiError {
  message: string;
}

export default function AnonymousBoard() {
  // States
  const [messages, setMessages] = useState<Message[]>([]);
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // API calls
  const fetchMessages = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.get<Message[]>(
        `${API_CONFIG.BASE_URL}/chat/${API_CONFIG.ENDPOINTS.GET_MESSAGES}`
      );
      setMessages(response.data);
    } catch (error) {
      const err = error as AxiosError<ApiError>;
      setError(err.response?.data.message || 'Không thể tải tin nhắn');
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!content.trim()) return;

    try {
      setIsLoading(true);
      setError(null);
      await axios.post(
        `${API_CONFIG.BASE_URL}/chat/${API_CONFIG.ENDPOINTS.POST_MESSAGE}`,
        { content },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setContent('');
      await fetchMessages();
    } catch (error) {
      const err = error as AxiosError<ApiError>;
      setError(err.response?.data.message || 'Không thể gửi tin nhắn');
    } finally {
      setIsLoading(false);
    }
  };

  // Event handlers
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  // Effects
  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div>
      <div style={{
        
      }}>
        <AppMenu />
      </div>
      <div className="anonymous-board" style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
        <h2>🕵️ Thảo luận ẩn danh</h2>

        {error && (
          <div style={{ color: 'red', marginBottom: '10px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <textarea
            value={content}
            onChange={handleChange}
            rows={4}
            disabled={isLoading}
            placeholder="Viết gì đó (ẩn danh)..."
            style={{ 
              width: '100%', 
              marginBottom: '10px',
              resize: 'vertical'
            }}
          />
          
          <button 
            type="submit" 
            disabled={isLoading || !content.trim()}
            style={{ 
              padding: '8px 16px',
              opacity: isLoading || !content.trim() ? 0.6 : 1
            }}
          >
            {isLoading ? 'Đang gửi...' : 'Gửi'}
          </button>
        </form>

        {isLoading && messages.length === 0 ? (
          <div>Đang tải tin nhắn...</div>
        ) : (
          <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '20px' }}>
            {messages.map((msg) => (
              <li 
                key={msg.id} 
                style={{ 
                  marginBottom: '15px', 
                  borderBottom: '1px solid #ccc', 
                  paddingBottom: '8px' 
                }}
              >
                <p style={{ margin: 0 }}>{msg.content}</p>
                <small>
                  {new Date(msg.created_at).toLocaleString('vi-VN')}
                </small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}