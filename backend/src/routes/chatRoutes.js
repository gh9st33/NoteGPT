```javascript
const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/send', authMiddleware.authenticateUser, chatController.sendMessage);
router.get('/history', authMiddleware.authenticateUser, chatController.getChatHistory);
router.delete('/history', authMiddleware.authenticateUser, chatController.deleteChatHistory);

module.exports = router;
```