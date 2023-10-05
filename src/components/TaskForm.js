import React from 'react'

const TaskForm = (props)=> {
    
  return (
      <div className="create" >
        <h1>Add new Task</h1>
        
        <input type="text" placeholder='title'  className='inp' id = "title" required name = 'title'/>
        <textarea name="desc" cols="30" rows="10" placeholder='description' className='inp' id = "desc" required></textarea>
        
        <div className='status inp'  >
          <label htmlFor="status">status</label>  
          <select name="status" id="status" className='inp' >
            <option value="todo" className='inp'>ToDo</option>  
            <option value="doing" className='inp'>Doing</option>  
            <option value="done" className='inp'>Done</option>  
          </select> 
        </div>
        
        <button className='inp' onClick={props.createTask}>create</button>
      </div>
    
  )
}

export default TaskForm
