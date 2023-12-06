import React, { useState, useEffect } from 'react';
import ChatBubble from './ChatBubble';

const ChatHistory = ({ chatData }) => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    setChatHistory(chatData);
  }, [chatData]);

  const deleteChatHistory = () => {
    setChatHistory([]);
  };

  return (
    <div id="chatHistory">
      {chatHistory.map((chat, index) => (
        <ChatBubble key={index} chat={chat} />
      ))}
      <button onClick={deleteChatHistory}>Delete Chat History</button>
    </div>
  );
};

export default ChatHistory;