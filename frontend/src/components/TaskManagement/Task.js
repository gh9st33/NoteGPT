import React, { useState } from 'react';

const Task = ({ taskData, updateTask, deleteTask, completeTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTaskName, setNewTaskName] = useState(taskData.name);

    const handleUpdate = () => {
        updateTask(taskData.id, newTaskName);
        setIsEditing(false);
    };

    const handleDelete = () => {
        deleteTask(taskData.id);
    };

    const handleComplete = () => {
        completeTask(taskData.id);
    };

    return (
        <div className="task">
            {isEditing ? (
                <input
                    type="text"
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                />
            ) : (
                <h3 className={taskData.isCompleted ? 'completed' : ''}>
                    {taskData.name}
                </h3>
            )}

            <div className="task-actions">
                {isEditing ? (
                    <button onClick={handleUpdate}>Save</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                )}

                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleComplete}>
                    {taskData.isCompleted ? 'Undo' : 'Complete'}
                </button>
            </div>
        </div>
    );
};

export default Task;