import React,{useEffect, useState} from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import "./task.css"
import ListTask from './ListTask'

function AllTask({tasks, setTasks}) {
 
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const nav = useNavigate()

  useEffect(() => {
   nav('list-task')
  }, [])
  
  
  return <>
    <div className="project-details">
      <div className="task-datedetails">
          <p className="date">Date: {formattedDate}</p>
          <p className="date">Deadline: 31/01/2024</p>
          <p className="date">Paticipants: ajith,arjun</p>
      </div>
      <div className="project-description">
         <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis perspiciatis, non tempora ipsam, quas dolore enim numquam </p>
      </div>
      <div className="task-status">
          <p className="date">All-Tasks:</p>
          <p className="date">Done: 0</p>
          <p className="date">frozen: 2</p>
      </div>
      </div>
    <div className="task-wrapper">
       <div className="task-row">
       </div>
      <div className="listrow">
         <div className="listTask" >
          <ListTask tasks={tasks} setTasks={setTasks}/>
         </div>
      </div>
    </div>
   
  </>
}

export default AllTask