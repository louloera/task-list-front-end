import React, { useEffect } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';
import axios from 'axios';




const App = () => {


const updateTaskFunction = (taskId) =>{

  const updatedTasks = allTasks.map((task)=>{
    if (task.id === taskId){
      return {...task, is_complete: !task.is_complete};
    }return {...task};
  });setAllTasks(updatedTasks);

};

  const updateCompletion = (taskId, is_complete) => {
    if (is_complete){
      axios.patch(`https://task-list-api-c17.onrender.com/tasks/${taskId}/mark_incomplete`)
          .then((response)=> {
            console.log('incompleted');
            updateTaskFunction(taskId);
          })
            .catch((error)=>{
              console.log('error', error);
            });
    }else {
      axios.patch(`https://task-list-api-c17.onrender.com/tasks/${taskId}/mark_complete`)
          .then((response)=> {
            console.log('completed');
            updateTaskFunction(taskId);
          })
          .catch((error)=>{
            console.log('error', error);
          });
        }
    
  };
  
  
  const [allTasks, setAllTasks] = useState([]);
  
  useEffect(()=> {
    axios.get('https://task-list-api-c17.onrender.com/tasks')
  
    .then((response)=>{
      const initialTaskData = [];
      response.data.forEach(task => {
        console.log(task);
        initialTaskData.push(task);
  
      });
      setAllTasks(initialTaskData);
    })
    .catch((error)=>{
      console.log(error);
    });
  },[]);


  const deleteTask = (taskId) => {
    axios.delete(`https://task-list-api-c17.onrender.com/tasks/${taskId}`).then(
      (response) => {

        const updatedTasks = allTasks.map(task => {
          if (taskId !== task.id){
            return {...task};
          }
          
        });
    
        const filteredUpdatedData = updatedTasks.filter(function (element) {
          return element !== undefined;
        });
    
        setAllTasks(filteredUpdatedData);

      }
    ).catch((error) =>{
      console.log("error", error);

    });

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
