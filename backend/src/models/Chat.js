const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
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