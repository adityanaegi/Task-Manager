# Task Manager Application
## Overview
The Task Manager Application is a simple and intuitive tool designed to help users manage their tasks effectively. Users can add new tasks, view a list of tasks, mark tasks as completed, delete tasks, and filter tasks based on their status. The application is built using React and incorporates a modal to add tasks.

## Features
* Add new tasks with a title, description, due date, and priority level.
* View tasks in a list format.
* Mark tasks as completed.
* Delete tasks.
* Filter tasks by status (All, Pending, Completed).
* Responsive design for optimal use on various devices.

## Setup Instructions
To set up the Task Manager Application locally, follow these steps:

## Prerequisites
* Ensure you have Node.js and npm installed on your machine.

## Installation
1. Clone the repository:

```
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

2. Install dependencies:

`npm install`

## Running the Application

1. Start the development server:

`npm start`

2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Building for Production
1. Build the application:

`npm run build`

2. The production-ready files will be in the __build__ directory. You can deploy these files to your preferred web server.

## Project Structure

```
task-manager/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── AddTask.js
│   │   ├── Task.js
│   │   ├── TaskList.js
│   │   ├── TaskModal.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Key Files

* __src/App.js__: Main application component.
* __src/components/AddTask.js__: Component for adding a new task.
* __src/components/Task.js__: Component for displaying a single task.
* __src/components/TaskList.js__: Component for displaying a list of tasks.
* __src/components/TaskModal.js__: Component for the modal used to add tasks.
* __src/index.js__: Entry point for the React application.
* __src/styles.css__: Styles for the application.