import React, { useState } from 'react';
import './App.css';
import Task from './components/Task';

const App = () => {
  const [card , setCard] = useState(null);
  const [i , setId] = useState(4);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description 1', status: 'todo' },
    { id: 2, title: 'Task 2', description: 'Description 2', status: 'doing' },
    { id: 3, title: 'Task 3', description: 'Description 3', status: 'done' },
  ]);

  // 
  const createTask = (event) => {
    // let t = tasks;
    tasks.push({id : i , title:document.getElementById('title').value , description : document.getElementById('desc').value, status:document.getElementById('status').value});
    
    setTasks(tasks);
    setId(i + 1);

  }

  // 
  const handleTitle = (id , title , desc) => {
    tasks[id-1].title = title;
    tasks[id-1].description = desc;
    setTasks(tasks);
    setId(i + 1);
    setId(i - 1);

  }

  // HANDLE STATE
  const handleState = (status)=> {
    tasks[card-1].status = null;
    tasks.push({id : i , title:tasks[card-1].title , description : tasks[card-1].description, status:status});
    
    setTasks(tasks);
    setId(i + 1);
  }

  //DRAGGING SECTION CODE
  const startD = (event) => {
    event.target.style.color = "red";
    event.dataTransfer.setData("Text", event.target.id);
    setCard(event.target.id)
    // console.log(event.target, event.target.id);
  };

  const onD = (event) => {
    event.target.style.backgroundColor = "yellow";
  };

  const overD = (event) => {
    event.target.style.border = "2px dotted green";
    // event.target.style.backgroundColor = "grey";
    event.preventDefault();
  };

  const droP = (event) => {
    event.target.style.color =  "white";
    event.target.style.border = "2px solid black";
    // event.target.style.background = "local";
    event.preventDefault();
    
    // const text = event.dataTransfer.getData("Text");
    // event.target.appendChild(document.getElementById(text));
    let H1 = event.target.getElementsByTagName('h1');
    let status = H1[0].innerText === "To Do" ? 'todo' : (H1[0].innerText === "Doing" ? 'doing' : 'done');
    handleState(status);
    console.log(H1[0].innerText);
  };

  return (
    <>
      <div className="App">
        <div className="column" onDrop={droP} onDragOver={overD}>
          <h1>To Do</h1>
          {tasks.map(task => task.status === 'todo' && <Task key={task.id} task={task} handleTitle = {handleTitle} startD = {startD} onD = {onD}/>)}
        </div>
        <div className="column" onDrop={droP} onDragOver={overD}>
          <h1>Doing</h1>
          {tasks.map(task => task.status === 'doing' && <Task key={task.id} task={task} handleTitle = {handleTitle} startD = {startD} onD = {onD}/>)}
        </div>
        <div className="column" onDrop={droP} onDragOver={overD}>
          <h1>Done</h1>
          {tasks.map(task => task.status === 'done' && <Task key={task.id} task={task} handleTitle = {handleTitle} startD = {startD} onD = {onD}/>)}
        </div>        
      </div>


      <div className="create" >
        <h1>Add new Task</h1>
        
        <input type="text" placeholder='title'  className='inp' id = "title" required />
        <textarea name="desc" cols="30" rows="10" placeholder='description' className='inp' id = "desc" required></textarea>
        
        <div className='status inp'  >
          <label htmlFor="status">status</label>  
          <select name="status" id="status" className='inp' >
            <option value="todo" className='inp'>ToDo</option>  
            <option value="doing" className='inp'>Doing</option>  
            <option value="done" className='inp'>Done</option>  
          </select> 
        </div>
        
        <button className='inp' onClick={createTask}>create</button>
      </div>
    </>
  );
};

export default App;
