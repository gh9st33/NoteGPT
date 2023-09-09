import React, { useState, useEffect } from 'react';
import Task from './Task';
import TaskChart from './TaskChart';

let taskData = [];

const TaskManagement = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Fetch tasks from backend
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        // Replace with actual API endpoint
        const res = await fetch('/api/tasks');
        const data = await res.json();
        setTasks(data);
        taskData = data;
    };

    const addTask = async (task) => {
        // Replace with actual API endpoint
        const res = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        });

        const data = await res.json();
        setTasks([...tasks, data]);
        taskData = [...tasks, data];
    };

    const deleteTask = async (id) => {
        // Replace with actual API endpoint
        await fetch(`/api/tasks/${id}`, {
            method: 'DELETE',
        });

        setTasks(tasks.filter((task) => task.id !== id));
        taskData = tasks.filter((task) => task.id !== id);
    };

    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id);
        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

        // Replace with actual API endpoint
        const res = await fetch(`/api/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updTask),
        });

        const data = await res.json();
        setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task)));
        taskData = tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task));
    };

    return (
        <div>
            <h1>Task Management</h1>
            <TaskChart tasks={tasks} />
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={deleteTask} onToggle={toggleReminder} />
            ))}
        </div>
    );
};

export default TaskManagement;
export { taskData };