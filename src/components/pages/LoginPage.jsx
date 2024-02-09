import {useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './loginpage.css'
import { LoginApi } from '../services/Api'
import { StoreUserData } from '../services/Storage'
import { isAuthenticated } from '../services/Auth'
import { toast } from 'react-hot-toast'


const LoginPage= ()=> {
    //initial states
    const initialStateErrors ={
        email:{required:false},
        password:{required:false},
        custom_Error:null
     }
     const [errors, setErrors] = useState(initialStateErrors)
     const [loading, setLoading] = useState(false)
  const nav = useNavigate();

  //Login function
  const handleSubmit = (event)=>{
      event.preventDefault();
      console.log(inputs)
      const errors = initialStateErrors;
      let hasError = false;
      if(inputs.email == ""){
        errors.email.required = true;
        hasError=true;
      }
      if(inputs.password == ""){
     errors.password.required = true;
     hasError=true;
        }
        if (hasError!=true) {
            //sending Login_API Request
            setLoading(true)
           LoginApi(inputs).then((Result)=>{
            console.log(Result)
            StoreUserData(Result.data.idToken)
            toast.success("logged-in successfully")
            nav('/dashboard')
            console.log(Result)
           }).catch((err)=>{
            if (err.code="ERR_BAD_REQUEST") {
                setErrors({...errors, custom_Error:"Invalid Login Credentials..."})
            }
           }).finally(()=>{
            setLoading(false)
           })
            
          } 
          setErrors({...errors})
  }
  const [inputs,setInputs] = useState({
    email:"",
    password:"",
 })
 const handleInput = (event)=>{
    setInputs({...inputs,[event.target.name]:event.target.value})
   
 }
 if (isAuthenticated()) {
    return <Navigate to='/dashboard'/>
  }
  return <>
    <div className="container">
            <div className="row justify-content-center">

                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Log In</h1>
                                        </div>
                                        <form className="user" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input type="email" name="email" className="form-control form-control-user"
                                                    id="exampleInputEmail" onChange={handleInput} aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..."/>
                                                     {errors.email.required ?
                                                        (<span className="text-danger text">
                                                            Email is required.
                                                        </span>):null
                                                        }
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" onChange={handleInput} placeholder="Password"/>
                                                    {errors.password.required?
                                                    (<span className="text-danger text" >
                                                    Password is required.
                                                    </span>):null
                                                    }
                                            </div>
                                            <div className="form-group">
                                            {errors.custom_Error?<span className="text-danger text" >
                                            <p>{errors.custom_Error}</p>
                                            </span>:null}
                                            {loading ? 
                                            (<div  className="text-center">
                                            <div className="spinner-border text-primary " role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            </div>):null
                                            }
                                            </div>
                                            <button  disabled={loading} className="btn btn-primary btn-user btn-block">
                                                Login
                                            </button>
                                            <hr/>
                                        </form>
                                        <hr/>
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html" >Forgot Password?</a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small"  onClick={()=>{nav('/register-page')}}>Create an Account!</a>
                                        </div>
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

export default LoginPage