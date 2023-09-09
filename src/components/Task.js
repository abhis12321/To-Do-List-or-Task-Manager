import React from 'react'

export default function Task(props) {
    // 
    const reWrite = (event)=> {
      let DIV = event.target.nextSibling;

      let input = DIV.getElementsByTagName('input');
      let button = DIV.getElementsByTagName('button');

      button[0].style.display = 'block';

      input[0].disabled = false;
      input[1].disabled = false;

      // input[0].style.border = '1px solid grey';
      // input[1].style.border = '1px solid grey';    
    }

    // 
    const saveEdit = (event) => {
      let DIV = event.target.parentElement;

      let input = DIV.getElementsByTagName('input');
      let button = DIV.getElementsByTagName('button');

      button[0].style.display = 'none';
      input[0].disabled = true;
      input[1].disabled = true;
    }

    // 
    const changeInfo = (event) => {
      let DIV = event.target.parentElement;
      let parent = DIV.parentElement;
      let input = DIV.getElementsByTagName('input');
      props.handleTitle(parent.id - '0', input[0].value , input[1].value);

      // console.log(DIV);
    }

    

  return (
    <div className="task-card" id = {props.task.id} draggable="true"  onDrag={props.onD}
    onDragStart={props.startD}>
      <h5 className='edit' onClick={reWrite}>edit</h5>
      <div >
        <input value={props.task.title} className = "title1 gap" disabled="disabled" onChange={changeInfo}/>
        <input value={props.task.description} className = "desc1 gap" disabled="disabled" onChange={changeInfo}/>
        <button className='saveEdit' onClick={saveEdit}>save</button>
      </div>
    </div>
  )
}
