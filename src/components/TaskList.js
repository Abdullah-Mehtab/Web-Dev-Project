// src/components/TaskList.js
import React from 'react';

function TaskList({ tasks, onUpdate, onDelete }) {
  const toggleCompletion = (task) => {
    onUpdate({ ...task, completed: !task.completed });
  };

  const handleDelete = (taskId) => {
    onDelete(taskId);
  };

  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="d-flex align-items-center justify-content-between border p-2 mb-2"
        >
          <div>
            <strong
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.title}
            </strong>{' '}
            <span
              className={`badge ms-2 ${
                task.priority === 'High'
                  ? 'bg-danger'
                  : task.priority === 'Medium'
                  ? 'bg-warning text-dark'
                  : 'bg-secondary'
              }`}
            >
              {task.priority}
            </span>{' '}
            <span className="badge bg-info text-dark ms-1">{task.category}</span>
          </div>
          <div>
            <input
              type="checkbox"
              className="form-check-input me-2"
              checked={task.completed}
              onChange={() => toggleCompletion(task)}
            />
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
