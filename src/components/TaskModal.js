import React from 'react';
import './TaskModal.css';
import AddTask from './AddTask';

const TaskModal = ({ show, onClose, addTask }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>x</button>
        <h2>Add Task</h2>
        <AddTask addTask={addTask} onClose={onClose} />
      </div>
    </div>
  );
};

export default TaskModal;
