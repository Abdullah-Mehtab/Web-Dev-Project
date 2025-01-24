// src/components/TaskForm.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // to generate unique IDs: npm install uuid

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Low');
  const [category, setCategory] = useState('Personal');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const newTask = {
      id: uuidv4(),
      title,
      priority,
      category,
      completed: false,
    };
    onAdd(newTask);
    // Reset form
    setTitle('');
    setPriority('Low');
    setCategory('Personal');
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label>Task Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label>Priority</label>
        <select
          className="form-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
      <div className="mb-2">
        <label>Category</label>
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Work</option>
          <option>Personal</option>
          <option>Others</option>
        </select>
      </div>
      <button className="btn btn-success" type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
