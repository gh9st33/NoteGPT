```javascript
import React from 'react';
import SplitScreen from './components/SplitScreen';
import TaskManagement from './components/TaskManagement/TaskManagement';
import ChatInterface from './components/ChatInterface/ChatInterface';

function App() {
  return (
    <div className="App">
      <SplitScreen 
        left={<TaskManagement />} 
        right={<ChatInterface />} 
      />
    </div>
  );
}

export default App;
```