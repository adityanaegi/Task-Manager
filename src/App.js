import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import addTask from './components/AddTask';
import TaskModal from './components/TaskModal';
import './App.css';

const App = () => {

  const updateMaxWidth = () => {
    const newWidth = window.innerWidth + 'px';
    document.documentElement.style.setProperty('--max-width', newWidth);
  };

  useEffect(() => {
    // Set the initial max-width
    updateMaxWidth();

    // Add event listener for window resize
    window.addEventListener('resize', updateMaxWidth);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateMaxWidth);
  }, []);

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [showModal, setShowModal] = useState(false);
  

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="app-container">
      <h1 className='webTitle'>Task Manager</h1>
      <Dashboard tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <button className="add-task-button" onClick={handleOpenModal}>Add Task</button>{' '}
      <TaskModal show={showModal} onClose={handleCloseModal} addTask={addTask} />
    </div>
  );
};

export default App;
