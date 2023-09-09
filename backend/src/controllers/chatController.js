```javascript
const Chat = require('../models/Chat');
const aiIntegration = require('../utils/aiIntegration');

// Get chat history
exports.getChatHistory = async (req, res) => {
    try {
        const chatHistory = await Chat.find({ user: req.user.id });
        res.json(chatHistory);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Send message
exports.sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const response = await aiIntegration.processMessage(message);

        const newMessage = new Chat({
            user: req.user.id,
            message: message,
            response: response
        });

        const chat = await newMessage.save();
        res.json(chat);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete chat history
exports.deleteChatHistory = async (req, res) => {
    try {
        await Chat.deleteMany({ user: req.user.id });
        res.json({ msg: 'Chat history deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
```