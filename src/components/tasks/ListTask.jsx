import React, { useEffect, useState } from 'react'
import './task.css'
import toast from 'react-hot-toast'
import { useDrag, useDrop } from 'react-dnd'
import task from '../createtask/Task.jsx'
import { Outlet, useNavigate } from 'react-router-dom'

function ListTask({tasks, setTasks}) {

  
  const [todos,setTodos]=useState([])
  const [inprogress,setInprogress]=useState([])
  const [closed,setClosed]=useState([])
  const [frozen,setFrozen]=useState([])
  useEffect(() => {
 
    const fTodos = tasks.filter(task => task.status === "todo")
    const fInprogress = tasks.filter(task => task.status === "inprogress")
    const fClosed = tasks.filter(task => task.status === "closed")
    const fFrozen = tasks.filter(task => task.status === "frozen")
    setTodos(fTodos)
    setInprogress(fInprogress)
    setClosed(fClosed)
    setFrozen(fFrozen)
  }, [tasks])

  const statuses = ["todo", "inprogress","closed","frozen"]
  
  return <>
   <div className='task-status-list'>

    {
      statuses.map((status,index)=> (
      <Section key={index}  status={status} tasks={tasks} setTasks={setTasks} todos={todos} inprogress={inprogress} closed={closed} frozen={frozen}/>))
    }
  </div>
  </>
}

export default ListTask

const Section = ({status, tasks, setTasks, todos, inprogress, closed, frozen})=>{
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item)=> addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))
  let text = "todo"
let tasksToMap=todos
let bg="grey"
 if(status==="inprogress"){
  text="inprogress"
  tasksToMap=inprogress
  bg="blue"
 }
 if(status==="closed"){
  text="closed"
  tasksToMap=closed
  bg="green"
 }
 if(status==="frozen"){
  text="frozen"
  tasksToMap=frozen
  bg="yellow"
 }

 const addItemToSection = (id)=>{
  setTasks((prev)=> {

    const modifiedTasks = prev.map(t =>{
      if(t.id === id){
        return {...t, status:status}
      }
      return t
    })
    localStorage.setItem("tasks", JSON.stringify(modifiedTasks))
    toast("task status changed",{icon:"😲"})
    return modifiedTasks;
  })
 }
  return <>
      <div ref={drop} className={`task-section ${isOver ? "sec-bgdark":""}`}>
        <Header text={text} count={tasksToMap.length}/>
        {tasksToMap.length>0 && tasksToMap.map((task)=> <Task key={task.id} tasks={tasks} task={task} setTasks={setTasks}/> )}
      </div> 
  </>
}

const Header = ({text, bg, count,})=>{
  const nav = useNavigate()
     
    if(text=="todo"){
    return  <>
    <div className={` ${bg} status-header`}>
   {text}<div className='task-counter'>{count} </div>
      <i className="fa-solid fa-plus create-task-icon" onClick={()=>{nav('/create-task')}} ></i> 
   </div>
  </>
  }
  else{
    return  <>
    <div className={` ${bg} status-header`}>
   {text}<div className='task-counter'>{count} </div>
   </div>
  </>
  }
  
}

const Task = ({task, tasks, setTasks})=>{
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: {id: task.id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
 
   const handleRemove =(id)=>{
   const fTasks = tasks.filter((t)=> t.id !== id)
   localStorage.setItem("tasks", JSON.stringify(fTasks))
   setTasks(fTasks)
 
   toast("Task Removed",{icon:"💀"})
  }
   
  return <>
  <div ref={drag} className={`task-box ${isDragging ? "low": "high"}`}>
   <p>{task.name}</p>
   <p>{task.description}</p>
   <p className='priority'>{task.priority}</p>
   <p >{task.deadline}</p>
   <i className="fa-solid fa-trash delete-task-btn" onClick={()=>{handleRemove(task.id)}}></i>
   </div>
  </>
}

