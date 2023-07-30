import React, { useState } from 'react';
import './TaskPanel.css'; // We'll create the CSS file for styling

const TaskPanel = () => {
    // Define state to manage the visibility of the task panel
    const [isTaskPanelOpen, setTaskPanelOpen] = useState(false);

    // Placeholder data for tasks (You can replace this with actual data from a database)
    const tasks = [
        { id: 1, title: 'Task 1', priority: 'High' },
        { id: 2, title: 'Task 2', priority: 'Medium' },
        { id: 3, title: 'Task 3', priority: 'Low' },
    ];

    return (
        <div className={`task-panel ${isTaskPanelOpen ? 'open' : ''}`}>
            {/* Button to toggle the task panel */}
            <button className="toggle-button" onClick={() => setTaskPanelOpen(!isTaskPanelOpen)}>
                {isTaskPanelOpen ? '✓' : '☐'}
            </button>
            <div className="tasks">
                {/* Display tasks based on priority */}
                {tasks.map((task) => (
                    <div key={task.id} className={`task ${task.priority.toLowerCase()}`}>
                        {task.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskPanel;

