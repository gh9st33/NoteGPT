const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  isUser: {
    type: Boolean,
    default: true
  }
});

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;