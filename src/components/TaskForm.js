import React from 'react'

const TaskForm = (props)=> {
    
  return (
      <form className="create" onSubmit={props.createTask}>
        <h1>Add New Task</h1>
        
        <input type="text" placeholder='title'  className='inp width1' id = "title" required name = 'title'/>
        <textarea name="desc" cols="30" rows="10" placeholder='description' className='inp width1' id = "desc" required></textarea>
        
        <select name="status" id="status" className='inp width2' placeholder='select Status' >
          <option value="todo" className='inp1'>To Do</option>  
          <option value="doing" className='inp1'>Doing</option>  
          <option value="done" className='inp1'>Done</option>  
        </select>
        
        <button className='inp width2' type='submit'>create</button>
      </form>
    
  )
}

export default TaskForm
