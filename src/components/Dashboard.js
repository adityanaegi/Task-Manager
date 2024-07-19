import React, { useState } from 'react';
import TaskList from './TaskList';
import SearchBar from './SearchBar';
import FilterMenu from './FilterMenu';

const Dashboard = ({ tasks, updateTask, deleteTask }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const filteredTasks = tasks.filter(task => {
    return (
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter ? task.priority === filter : true)
    );
  });

  const overdueTasks = filteredTasks.filter(task => task.dueDate < today && !task.completed);
  const upcomingTasks = filteredTasks.filter(task => task.dueDate >= today && !task.completed);
  const completedTasks = filteredTasks.filter(task => task.completed);

  return (
    <div >
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterMenu filter={filter} setFilter={setFilter} />

      <h2 className="overtask">Overdue Tasks</h2>
      <TaskList tasks={overdueTasks} updateTask={updateTask} deleteTask={deleteTask} />

      <h2>Upcoming Tasks</h2>
      <TaskList tasks={upcomingTasks} updateTask={updateTask} deleteTask={deleteTask} />

      <h2>Completed Tasks</h2>
      <TaskList tasks={completedTasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default Dashboard;
