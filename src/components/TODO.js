import React from 'react';
import Task from './components/Task';


const TODO = (props)=> {
  return (
    <div className="column" onDrop={props.droP} onDragOver={props.overD}>
          <h1>To Do</h1>
          {props.tasks.map(task => task.status === 'todo' && <Task key={task.id} task={task} handleTitle = {props.handleTitle} startD = {props.startD} onD = {props.onD}/>)}
    </div>
  )
}

export default TODO
