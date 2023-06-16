import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [allTasks, setAllTasks] = useState(TASKS);

  const updateCompletion = (taskId) => {
    const updatedTasks = allTasks.map(task => {
      if (taskId === task.id){
        task.isComplete = !task.isComplete; 
      }
      return {...task};
    });
    setAllTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = allTasks.map(task => {
      if (taskId !== task.id){
        return {...task};
      }
      
    });

    const filteredUpdatedData = updatedTasks.filter(function (element) {
      return element !== undefined;
    });

    setAllTasks(filteredUpdatedData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={ allTasks } updateCompletion={updateCompletion} 
        deleteTask={deleteTask}/>}</div>
      </main>
    </div>
  );
};

export default App;
