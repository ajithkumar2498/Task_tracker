import React from 'react'
import { useState } from 'react'
import { logout } from '../services/Auth'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import { isAuthenticated } from '../services/Auth'
import { Navigate } from 'react-router-dom'
function Dashboard() {
    
    const nav = useNavigate()
    const logoutUser=()=>{
        logout()
        nav('/home')
    }
    const [first, setfirst] = useState({
        name:"",
        email:"",
        localId:"",
    })
    if (!isAuthenticated()) {
        return <Navigate to='/home'/>
      }
  return <> 
     <div id="content-wrapper" className="d-flex flex-column"> 
      {/* <!-- Main Content --> */}
      <div id="content">
      <Sidebar logoutUser={logoutUser}/>
        <Navbar/>
         <div className="container-fluid">
          <div className="row">
            
          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                  Earnings (Monthly)</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                          </div>
                          <div className="col-auto">
                              <i className="fas fa-calendar fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                  Earnings (Annual)</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                          </div>
                          <div className="col-auto">
                              <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-info shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                              </div>
                              <div className="row no-gutters align-items-center">
                                  <div className="col-auto">
                                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                  </div>
                                  <div className="col">
                                      <div className="progress progress-sm mr-2">
                                          <div className="progress-bar bg-info" role="progressbar"
                                              style={{width: "50%", ariaValueNow:"50", ariaValueMin:"0",
                                              ariaValueMax:"100"}}></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-auto">
                              <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* <!-- Pending Requests Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-warning shadow h-100 py-2">
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                        Pending Requests</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                </div>
                <div className="col-auto">
                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                </div>
            </div>
        </div>
    </div>
            </div>
          </div>
          <div className="row">

{/* <!-- Area Chart --> */}
<div className="col-xl-8 col-lg-7">
    <div className="card shadow mb-4">
        {/* <!-- Card Header - Dropdown --> */}
        <div
            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
            <div className="dropdown no-arrow">
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink">
                    <div className="dropdown-header">Dropdown Header:</div>
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        </div>
        {/* <!-- Card Body --> */}
        <div className="card-body">
            <div className="chart-area">
                <canvas id="myAreaChart"></canvas>
            </div>
        </div>
    </div>
</div>

{/* <!-- Pie Chart --> */}
<div className="col-xl-4 col-lg-5">
    <div className="card shadow mb-4">
        {/* <!-- Card Header - Dropdown --> */}
        <div
            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
            <div className="dropdown no-arrow">
                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink">
                    <div className="dropdown-header">Dropdown Header:</div>
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        </div>
        {/* <!-- Card Body --> */}
        <div className="card-body">
            <div className="chart-pie pt-4 pb-2">
                <canvas id="myPieChart"></canvas>
            </div>
            <div className="mt-4 text-center small">
                <span className="mr-2">
                    <i className="fas fa-circle text-primary"></i> Direct
                </span>
                <span className="mr-2">
                    <i className="fas fa-circle text-success"></i> Social
                </span>
                <span className="mr-2">
                    <i className="fas fa-circle text-info"></i> Referral
                </span>
            </div>
        </div>
    </div>
</div>
          </div>
          <div className="row">
          <div className="col-lg-6 mb-5">
              {/* <!-- Project Card Example --> */}
              <div className="card shadow mb-4">
                  <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                  </div>
                  <div className="card-body">
                      <h4 className="small font-weight-bold">Server Migration <span
                              className="float-right">20%</span></h4>
                      <div className="progress mb-4">
                          <div className="progress-bar bg-danger" role="progressbar" style={{width: "20%",
                              ariaValueNow:"20", ariaValueMin:"0", ariaValueMax:"100"}}></div>
                      </div>
                      <h4 className="small font-weight-bold">Sales Tracking <span
                              className="float-right">40%</span></h4>
                      <div className="progress mb-4">
                          <div className="progress-bar bg-warning" role="progressbar" style={{width: "40%",
                              ariaValueNow:"40", ariaValuemin:"0", ariaValueMax:"100"}}></div>
                      </div>
                      <h4 className="small font-weight-bold">Customer Database <span
                              className="float-right">60%</span></h4>
                      <div className="progress mb-4">
                          <div className="progress-bar" role="progressbar" style={{width: "60%",
                              ariaValueNow:"60", ariaValueMin:"0", ariaValueMax:"100"}}></div>
                      </div>
                      <h4 className="small font-weight-bold">Payout Details <span
                              className="float-right">80%</span></h4>
                      <div className="progress mb-4">
                          <div className="progress-bar bg-info" role="progressbar" style={{width: "80%",
                              ariaValueNow:"80", ariaValueMin:"0", ariaValueMax:"100"}}></div>
                      </div>
                      <h4 className="small font-weight-bold">Account Setup <span
                              className="float-right">Complete!</span></h4>
                      <div className="progress">
                          <div className="progress-bar bg-success" role="progressbar" style={{width: "100%",
                              ariaValueNow:"100", ariaValueMin:"0", ariaValueMax:"100"}}></div>
                      </div>
                  </div>
              </div>
           </div>
          </div>
        </div> 
      </div>
   </div> 

   
  </>
}

export default Dashboard