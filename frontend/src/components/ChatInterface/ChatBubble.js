import React from 'react';
import PropTypes from 'prop-types';

const ChatBubble = ({ message, isUser }) => {
  return (
    <div className={`chat-bubble ${isUser ? 'user' : 'bot'}`}>
      <p>{message}</p>
    </div>
  );
};

ChatBubble.propTypes = {
  message: PropTypes.string.isRequired,
  isUser: PropTypes.bool.isRequired,
};

export default ChatBubble;