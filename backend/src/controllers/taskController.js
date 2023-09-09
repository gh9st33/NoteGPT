```javascript
const Task = require('../models/Task');

// Get all tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get one task
exports.getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (task == null) {
            return res.status(404).json({ message: 'Cannot find task' });
        }
        res.json(task);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

// Create one task
exports.createTask = async (req, res) => {
    const task = new Task({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        deadline: req.body.deadline
    });
    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update one task
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (task == null) {
            return res.status(404).json({ message: 'Cannot find task' });
        }

        if (req.body.name != null) {
            task.name = req.body.name;
        }
        if (req.body.description != null) {
            task.description = req.body.description;
        }
        if (req.body.status != null) {
            task.status = req.body.status;
        }
        if (req.body.deadline != null) {
            task.deadline = req.body.deadline;
        }

        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

// Delete one task
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (task == null) {
            return res.status(404).json({ message: 'Cannot find task' });
        }
        await task.remove();
        res.json({ message: 'Deleted Task' });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
```