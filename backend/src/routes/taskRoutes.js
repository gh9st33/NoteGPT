```javascript
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

router.route('/')
    .get(authMiddleware.authenticateUser, taskController.getAllTasks)
    .post(authMiddleware.authenticateUser, taskController.addTask);

router.route('/:id')
    .get(authMiddleware.authenticateUser, taskController.getTask)
    .put(authMiddleware.authenticateUser, taskController.updateTask)
    .delete(authMiddleware.authenticateUser, taskController.deleteTask);

router.route('/:id/complete')
    .put(authMiddleware.authenticateUser, taskController.completeTask);

module.exports = router;
```