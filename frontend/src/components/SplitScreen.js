```javascript
import React from 'react';
import TaskManagement from './TaskManagement/TaskManagement';
import ChatInterface from './ChatInterface/ChatInterface';
import './SplitScreen.css';

const SplitScreen = () => {
    return (
        <div className="split-screen">
            <div className="split-screen-left">
                <TaskManagement />
            </div>
            <div className="split-screen-right">
                <ChatInterface />
            </div>
        </div>
    );
};

export default SplitScreen;
```

And the corresponding CSS file (SplitScreen.css) would look like this:

```css
.split-screen {
    display: flex;
    height: 100vh;
}

.split-screen-left {
    flex: 1;
    border-right: 1px solid #ddd;
    overflow-y: auto;
}

.split-screen-right {
    flex: 1;
    overflow-y: auto;
}
```