// src/pages/ToDo.jsx
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// or use: import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { v4 as uuidv4 } from 'uuid';

function ToDo() {
  // Columns must match droppableIds exactly
  const [columns, setColumns] = useState({
    todo: [],
    inProgress: [],
    done: [],
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('taskColumns'));
    if (saved) setColumns(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('taskColumns', JSON.stringify(columns));
  }, [columns]);

  // Drag-and-drop logic
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    // If same spot => no changes
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Remove from source
    const sourceCol = [...columns[source.droppableId]];
    const [movedTask] = sourceCol.splice(source.index, 1);

    // If dropping in "delete"
    if (destination.droppableId === 'delete') {
      setColumns((prev) => ({
        ...prev,
        [source.droppableId]: sourceCol,
      }));
      return;
    }

    // Otherwise move to destination
    const destCol = [...columns[destination.droppableId]];
    destCol.splice(destination.index, 0, movedTask);

    setColumns((prev) => ({
      ...prev,
      [source.droppableId]: sourceCol,
      [destination.droppableId]: destCol,
    }));
  };

  // Add a new task to "todo" by default
  const addNewTask = (task) => {
    setColumns((prev) => ({
      ...prev,
      todo: [task, ...prev.todo],
    }));
  };

  // Clear ALL tasks in all columns
  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear ALL tasks?')) {
      setColumns({
        todo: [],
        inProgress: [],
        done: [],
      });
    }
  };

  // Delete a specific task from a given column
  const handleDeleteTask = (droppableId, taskId) => {
    const colCopy = [...columns[droppableId]];
    const updatedTasks = colCopy.filter((t) => t.id !== taskId);
    setColumns((prev) => ({
      ...prev,
      [droppableId]: updatedTasks,
    }));
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '1200px' }}>
      <h2 className="mb-3">To-do Board</h2>
      <AddTaskForm onAdd={addNewTask} />

      {/* Clear All button */}
      <div className="text-end mb-3">
        <button className="btn btn-danger" onClick={handleClearAll}>
          Clear All
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        {/* Three columns */}
        <div className="row">
          <TaskColumn
            droppableId="todo"
            title="To Do"
            tasks={columns.todo}
            colorClass="border-danger"
            onDeleteTask={handleDeleteTask}
          />
          <TaskColumn
            droppableId="inProgress"
            title="In Progress"
            tasks={columns.inProgress}
            colorClass="border-warning"
            onDeleteTask={handleDeleteTask}
          />
          <TaskColumn
            droppableId="done"
            title="Done"
            tasks={columns.done}
            colorClass="border-success"
            onDeleteTask={handleDeleteTask}
          />
        </div>
      </DragDropContext>
    </div>
  );
}

// Form to add tasks
function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !dueDate) {
      alert('Please provide both a task title and a due date.');
      return;
    }
    const newTask = {
      id: uuidv4(),
      title,
      priority,
      dueDate,
    };
    onAdd(newTask);
    setTitle('');
    setPriority('Low');
    setDueDate('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex align-items-end mb-4 gap-3 flex-wrap"
    >
      <div>
        <label className="form-label">Task Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g., Buy groceries"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label className="form-label">Priority</label>
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
      <div>
        <label className="form-label">Due Date</label>
        <input
          type="date"
          className="form-control"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
}

// Single Column with "onDeleteTask" prop for quick deletion
function TaskColumn({ droppableId, title, tasks, colorClass, onDeleteTask }) {
  return (
    <div className="col-md-4 mb-4">
      <h4 className="mb-3">{title}</h4>
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <div
            className={`p-2 border ${colorClass} rounded`}
            style={{
              minHeight: '300px',
              backgroundColor: snapshot.isDraggingOver ? '#eaeaea' : '#f8f8f8',
            }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided2) => (
                  <div
                    className="card mb-2"
                    ref={provided2.innerRef}
                    {...provided2.draggableProps}
                    {...provided2.dragHandleProps}
                    style={{
                      ...provided2.draggableProps.style,
                      backgroundColor: '#fff',
                      color: '#000',
                    }}
                  >
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <div>
                        <strong>{task.title}</strong>
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
                        </span>
                        <div className="text-muted" style={{ fontSize: '0.9rem' }}>
                          Due: {task.dueDate}
                        </div>
                      </div>
                      {/* Right-side delete button */}
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => onDeleteTask(droppableId, task.id)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default ToDo;
