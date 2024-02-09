
<DndProvider backend={HTML5Backend}>
<Toaster/>
   <BrowserRouter>
   <LandingPage/>

     <Sidebar/>
     <div className="content-wrapper" >
       <div className="content">
           <Navbar/>
         <div className="container-fluid">
           <Routes>
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
    </div>
  

  </BrowserRouter>
  </DndProvider>