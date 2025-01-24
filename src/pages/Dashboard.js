// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const completionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Completion Rate: {completionRate.toFixed(2)}%</p>
      {/* You can add charts or graphs using a chart library */}
    </div>
  );
}

export default Dashboard;
