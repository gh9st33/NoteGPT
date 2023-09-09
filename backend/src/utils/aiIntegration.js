```javascript
const axios = require('axios');
const { taskData } = require('../controllers/taskController');
const { chatData } = require('../controllers/chatController');

const GPT4_API_URL = 'https://api.openai.com/v4/engines/davinci-codex/completions';

const processUserInput = async (input) => {
  const response = await axios.post(GPT4_API_URL, {
    prompt: input,
    max_tokens: 60,
  });

  return response.data.choices[0].text.trim();
};

const executeTaskCommand = async (command) => {
  const taskCommand = command.split(' ')[0];
  const taskId = command.split(' ')[1];

  switch (taskCommand) {
    case 'add':
      taskData.addTask(taskId);
      break;
    case 'update':
      taskData.updateTask(taskId);
      break;
    case 'delete':
      taskData.deleteTask(taskId);
      break;
    case 'complete':
      taskData.completeTask(taskId);
      break;
    default:
      return 'Invalid command';
  }

  return 'Task command executed successfully';
};

const processChatMessage = async (message) => {
  const response = await processUserInput(message);
  chatData.addMessage(response);

  if (response.startsWith('task')) {
    const command = response.split(' ')[1];
    executeTaskCommand(command);
  }

  return response;
};

module.exports = {
  processChatMessage,
};
```