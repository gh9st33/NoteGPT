import React, { useState } from 'react';

const ChatInput = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (message.trim() !== '') {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSendMessage}>
      <input
        id="chatInput"
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="Type your message here..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatInput;