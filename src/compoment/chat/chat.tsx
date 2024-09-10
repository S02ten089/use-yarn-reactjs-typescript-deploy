import React, { useState, useEffect } from 'react';
import { database } from './api/firebase';
import { ref, onValue, push } from 'firebase/database';

interface Message {
  id: string;
  text: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  useEffect(() => {
    const messagesRef = ref(database, 'messages');
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const loadedMessages: Message[] = [];
      for (const key in data) {
        loadedMessages.push({ id: key, text: data[key] });
      }
      setMessages(loadedMessages);
    });
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const messagesRef = ref(database, 'messages');
      push(messagesRef, newMessage);
      setNewMessage('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>{message.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;
