import  {useState} from 'react'
import './registerpage.css'
import { RegisterApi } from '../services/Api.js'
import { StoreUserData } from '../services/Storage.js'
import { isAuthenticated } from '../services/Auth.js'
import { Navigate, useNavigate } from 'react-router-dom'

function RegisterPage() {
   const nav= useNavigate()

   const initialStateErrors ={
      email:{required:false},
      name:{required:false},
      password:{required:false},
      custom_Error:null
   }
   const [errors, setErrors] = useState(initialStateErrors)
   const [loading, setLoading] = useState(false)
  

   const handleSubmit = (event)=>{
      event.preventDefault()
      const errors = initialStateErrors
      let hasError = false;
      if(inputs.name == ""){
            errors.name.required = true;
            hasError=true;
      }
      if(inputs.email == ""){
         errors.email.required = true;
         hasError=true;
       }
       if(inputs.password == ""){
      errors.password.required = true;
      hasError=true;
         }
         
       if (hasError!=true) {
         //sending API Request
         setLoading(true)
        RegisterApi(inputs).then((Result)=>{
         StoreUserData(Result.data.idToken)
         console.log(Result)
        }).catch((err)=>{
         if (err.response.data.error.message=="EMAIL_EXISTS") {
            setErrors({...errors, custom_Error:"Already this Email has been Registered..!"})
         }else if (String(err.response.data.error.message).includes('WEAK_PASSWORD')) {
            
            setErrors({...errors, custom_Error:"Password should be atleast 6 characters"})
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
      name:""
   })
   const handleInput = (event)=>{
      setInputs({...inputs,[event.target.name]:event.target.value})
     
   }

    if (isAuthenticated()) {
      return <Navigate to='/dashboard'/>
    }
  
   return <>
            <div className="container">

        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
            
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form className="user" onSubmit={handleSubmit}>
                                <div className="form-group row">
                                    <div className="col-sm-12 mb-3 mb-sm-0">
                                        <input type="text" className="form-control form-control-user" name="name" onChange={handleInput} id="exampleFirstName"
                                            placeholder="Name"/>
                                    </div>
                                    {errors.name.required ? 
                                    (<span className="text-danger text" >
                                       Name is required.
                                    </span>):null
                                    }
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user" name="email" onChange={handleInput} id="exampleInputEmail"
                                        placeholder="Email Address"/>
                                    {errors.email.required ?
                                    (<span className="text-danger text">
                                       Email is required.
                                       </span>):null
                                    }
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12 mb-3 mb-sm-0">
                                        <input type="password" className="form-control form-control-user" name="password" onChange={handleInput}
                                            id="exampleInputPassword" placeholder="Password"/>
                                    </div>
                                    {errors.password.required?
                                       (<span className="text-danger text" >
                                       Password is required.
                                    </span>):null
                                    }
                                </div>
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
                                <button type="submit" disabled={loading} className="btn btn-primary btn-user btn-block">
                                    Register Account
                                </button>
                                <hr/>
                            </form>
                            <hr/>
                            <div className="text-center">
                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                            </div>
                            <div className="text-center">
                                <a className="small" onClick={()=>nav('/login-page')}>Already have an account? Login!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            </div>
    
   </>
}


 




export default RegisterPage