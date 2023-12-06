```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', userController.registerUser);
router.post('/login', userController.authenticateUser);
router.post('/password-reset', authMiddleware.authorizeUser, userController.resetPassword);
router.put('/profile', authMiddleware.authorizeUser, userController.updateProfile);

module.exports = router;
```