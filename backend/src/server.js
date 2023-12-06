const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const chatRoutes = require('./routes/chatRoutes');
const userRoutes = require('./routes/userRoutes');
const connectToDatabase = require('../database/config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectToDatabase();

// Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});