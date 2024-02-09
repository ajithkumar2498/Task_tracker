import React from 'react'
import "./sidebar.css"
import logo from "../../images/mainlogo.png"
import {Link} from "react-router-dom"
import { isAuthenticated } from '../services/Auth'
import { Navigate } from 'react-router-dom'

function Sidebar(props) {
 
    if (!isAuthenticated()) {
        return <Navigate to='/home'/>
      }
  return <>
    <div className="content">
     <ul className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">


<Link  to={'/dashboard'} className="sidebar-brand d-flex align-items-center justify-content-center" >
    <div className="sidebar-brand-icon ">
       <img src={logo} alt="" className='sidebar-logo'/>
    </div>
</Link>
<hr className="sidebar-divider my-0"/>

<li className="nav-item active">
    <Link to={'/dashboard'} className="nav-link" >
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
    </Link>
</li>
<hr className="sidebar-divider"/>
<li className="nav-item">
    <Link to={'/clients'} className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i className="fa-solid fa-user"></i>
        <span>Clients</span>
    </Link>
</li>
<li className="nav-item">
    <Link to={'/All-task'}className="nav-link collapsed"  data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
          <i className="fa-solid fa-list-check"></i>
        <span>All-Tasks</span>
    </Link>
</li>
<hr className="sidebar-divider"/>
<li className="nav-item">
    <a onClick={props.logoutUser} className="nav-link collapsed"   data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
         <i className="fa-solid fa-right-from-bracket" ></i>
        <span>logout</span>
    </a>
</li>
{/* <li className="nav-item">
    <a className="nav-link" href="charts.html">
        <i className="fas fa-fw fa-chart-area"></i>
        <span>Charts</span></a>
</li>
<li className="nav-item">
    <a className="nav-link" href="tables.html">
        <i className="fas fa-fw fa-table"></i>
        <span>Tables</span></a>
</li> */}
</ul>
</div>
  </>
}

export default Sidebar