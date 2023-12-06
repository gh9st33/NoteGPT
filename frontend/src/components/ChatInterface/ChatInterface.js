import React, { useState, useEffect } from 'react';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import ChatHistory from './ChatHistory';
import { chatData } from '../../../sharedDependencies';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(chatData);
  }, [chatData]);

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  const handleDeleteChatHistory = () => {
    setMessages([]);
  };

  return (
    <div id="chatInterface">
      <ChatHistory messages={messages} />
      {messages.map((message, index) => (
        <ChatBubble key={index} message={message} />
      ))}
      <ChatInput onSendMessage={handleSendMessage} />
      <button onClick={handleDeleteChatHistory}>Delete Chat History</button>
    </div>
  );
};

export default ChatInterface;