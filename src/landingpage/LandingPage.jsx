import React from 'react'
import './landingpage.css'
import TaskLogo from "../images/Task-Manager (2).png"
import logo from "../images/Task Tracker - logo.png"
import { useNavigate } from 'react-router-dom'

function LandingPage() {
    const nav = useNavigate()
  return <>
   <header>
        <div className="my-nav">
            <div className="container">
                <div className="row">
                    <div className="nav-items">
                        <div className="menu-toggle"></div>
                        <div className="logo">
                            <img className="hide-scrol" src={logo}/>
                        </div>
                        <div className="menu-items">
                            <div className="menu">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
{/* 
    <!-- ================**Banner Section**================ --> */}

    <section className="banner">
        <div className="banner-wrapper-main"></div>
        <div className="container">
            <div className="row">
                <div className="slider-wrapper">
                    <div className="box-01">
                        <div className="content">
                            <h1>Task Tracker Application</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quasi laborum deserunt necessitatibus. Earum excepturi nobis, 
                            reprehenderit deserunt minima, veniam omnis libero, debitis fugiat autem alias eos architecto? In, eos!</p>

                            <div className="btn-001">
                                <ul>
                                    <li><a className="log" onClick={()=>{nav('/login-page')}} >Login</a></li>
                                    <li><a className="log" onClick={()=>{nav('/register-page')}}>Sign-Up</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="box-01">
                        <div className="slider-image">
                            <img className="image" src={TaskLogo}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
}

export default LandingPage