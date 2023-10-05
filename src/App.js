import React, { useState } from 'react';
import './App.css';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

const App = () => {
  const [card , setCard] = useState(null);
  const [i , setId] = useState(4);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description 1', status: 'todo' },
    { id: 2, title: 'Task 2', description: 'Description 2', status: 'doing' },
    { id: 3, title: 'Task 3', description: 'Description 3', status: 'done' },
  ]);

  React.useEffect(() => {
    const list = JSON.parse(localStorage.getItem('tasks'));
    if(list != null) {
      setTasks(list);
      setId(list.length + 1);
    }
  } , []);

  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } , [tasks]);


  // CREATE NEW TASKS
  const createTask = (event) => {
    event.preventDefault();
    setTasks([...tasks, 
      {id : i , title:document.getElementById('title').value , description : document.getElementById('desc').value, status:document.getElementById('status').value}
    ]);
    
    setId(i + 1);

  }

  // HANDLE TITLE OF A TASK
  const handleTitle = (id , title , desc) => {
    tasks[id-1].title = title;
    tasks[id-1].description = desc;
    setTasks([...tasks])
  }

  // HANDLE STATE
  const handleState = (status)=> {
    tasks[card-1].status = status;
    setTasks([...tasks]);
  }

  //DRAGGING SECTION CODE
  const startD = (event) => {
    // event.target.style.color = "red";
    event.dataTransfer.setData("Text", event.target.id);
    setCard(event.target.id)
    // console.log(event.target, event.target.id);
  };

  const onD = (event) => {
    // event.target.style.backgroundColor = "yellow";
  };

  const overD = (event) => {
    // event.target.style.border = "2px dotted green";
    // event.target.style.backgroundColor = "grey";
    event.preventDefault();
  };

  const droP = (event) => {
    // event.target.style.color =  "white";
    // event.target.style.border = "2px solid black";
    // event.target.style.background = "local";
    event.preventDefault();
    
    // const text = event.dataTransfer.getData("Text");
    // event.target.appendChild(document.getElementById(text));
    let H1 = event.target.getElementsByTagName('h1');
    let status = H1[0].innerText === "To Do" ? 'todo' : (H1[0].innerText === "Doing" ? 'doing' : 'done');
    handleState(status);
    // console.log(H1[0].innerText);
  };

  return (
    <div className='img'>
      <div className="App">

        <div className="column" onDrop={droP} onDragOver={overD}>
          <h1 className='tag'>To Do</h1>
          {tasks.map(task => task.status === 'todo' && <Task key={task.id} task={task} handleTitle = {handleTitle} startD = {startD} onD = {onD}/>)}
        </div>


        <div className="column" onDrop={droP} onDragOver={overD}>
          <h1 className='tag'>Doing</h1>
          {tasks.map(task => task.status === 'doing' && <Task key={task.id} task={task} handleTitle = {handleTitle} startD = {startD} onD = {onD}/>)}
        </div>


        <div className="column" onDrop={droP} onDragOver={overD}>
          <h1 className='tag'>Done</h1>
          {tasks.map(task => task.status === 'done' && <Task key={task.id} task={task} handleTitle = {handleTitle} startD = {startD} onD = {onD}/>)}
        </div>  
              
      </div>


      <TaskForm  createTask = {createTask}   />
    </div>
  );
};

export default App;
