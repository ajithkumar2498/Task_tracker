import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import "./createTask.css"
import { useNavigate } from 'react-router-dom';

function task({tasks, setTasks}) {
  let nav = useNavigate()
  const [task,setTask]=useState({
    id:"",
    name:"",
    description:"",
    status:"todo"

  })
  console.log(task)
  const handleSubmit =(e)=>{
       e.preventDefault();
       if(task.name.length <3 || task.description.length < 3) return toast.error("enter task more than 3 characters")
    setTasks((prev)=>{
      const list =[...prev, task]
      localStorage.setItem('tasks', JSON.stringify(list))
      return list
    })
    toast.success("Task Created")
    setTask({
      id:"",
      name:"",
      description:"",
      status:"todo"
    })
    nav('/list-task')
  }
  return <> 
  <form onSubmit={handleSubmit} className='task-form '>
    <input type="text" placeholder="Task" value={task.name} onChange={(e)=>{
      setTask({
        ...task,
        id:uuidv4(),
        name:e.target.value
      })
    }}/>
    
    <input type="text" placeholder="description" value={task.description} onChange={(e)=>{
      setTask({
        ...task,
        id:uuidv4(),
        description:e.target.value
      })
    }}/>
  
    <button>Create</button>
  </form>
   
  </>
    
  
}

export default task