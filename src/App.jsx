import { useEffect, useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Task from './components/createtask/Task'
import AllTask from './components/tasks/AllTask'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import Clients from './components/clients/Clients'
import ListTask from './components/tasks/ListTask'
import toast, { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import RegisterPage from './components/pages/RegisterPage'
import LandingPage from './landingpage/LandingPage'
import LoginPage from './components/pages/LoginPage'

function App() {
  const [tasks,setTasks]=useState([])
 useEffect(() => {
   
 setTasks(JSON.parse(localStorage.getItem('tasks')))
   
 }, [])
 
  return  <>
    
      <DndProvider backend={HTML5Backend}>
      <Toaster/>
      <BrowserRouter>
      
        <div className="content-wrapper">
         
         
             {/*<Navbar/> */}
              <div className="container-fluid">
              
             
                <Routes>
                  
                  <Route path="/home" element={  <LandingPage/>}></Route>
                  <Route path='/register-page' element={<RegisterPage/>}/>
                  <Route path='/login-page' element={<LoginPage/>}/>
                  <Route path='/dashboard' element={<Dashboard/>}/>
                  <Route path='/clients' element={<Clients/>}/>
                    <Route path='/All-task' element={<AllTask tasks={tasks} setTasks={setTasks}/>}> 
                        <Route path='list-task' element={<ListTask tasks={tasks} setTasks={setTasks}/>}/> 
                    </Route>
                    <Route path='/create-task' element={<Task tasks={tasks} setTasks={setTasks} />} /> 
                  <Route path='*' element={<Navigate to='/dashboard'/>}/>
                </Routes>

                
               
              </div>
           </div>
        
      </BrowserRouter>
      </DndProvider>
    </>

}

export default App
