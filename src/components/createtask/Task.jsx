import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import "./createTask.css"
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../services/Auth';
import { Navigate } from 'react-router-dom';

function task({tasks, setTasks}) {
  let nav = useNavigate()
  const [task,setTask]=useState({
    id:"",
    name:"",
    description:"",
    priority:"",
    status:"todo",
    deadline:""
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
  //date format change function
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
  };
 
  if (!isAuthenticated()) {
    return <Navigate to='/home'/>
  }
  return <> 
  <div className="form">
  <form onSubmit={handleSubmit} className='task-form '>
    <input type="text" placeholder="Task" value={task.name} onChange={(e)=>{
      setTask({
        ...task,
        id:uuidv4(),
        name:e.target.value
      })
    }}/>
    
    <input type="textarea" placeholder="description" value={task.description} onChange={(e)=>{
      setTask({
        ...task,
        id:uuidv4(),
        description:e.target.value
      })
    }}/>
    <div className="control">
      <label htmlFor="priority">priority</label>
        <select name="priority" id="" value={task.priority} onChange={(e)=>{
            setTask({
              ...task,
              id:uuidv4,
              priority:e.target.value
            })
        }}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <label htmlFor="Assignuser">Assign User</label>
        <select name="users" id="" value={task.user} onChange={(e)=>{
            setTask({
              ...task,
              id:uuidv4,
              priority:e.target.value
            })
        }}>
           <option value="Low">select user</option>
        </select>
    </div>
    <label htmlFor="deadline">deadline</label>
    <input type="date" name="deadline" value={task.deadline} onChange={(e)=>{
      setTask({
        ...task,
        id:uuidv4,
        deadline:formatDate(e.target.value)
      })
    }} min={new Date().toISOString().split("T")[0]} />
    <button>Create</button>
  </form>
  </div>
   
  </>
    
  
}

export default task