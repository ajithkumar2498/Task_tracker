import  {useState} from 'react'
import './registerpage.css'
import RegisterApi from '../services/RegisterApi.js'

function RegisterPage() {

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
      }
      if(inputs.email == ""){
         errors.email.required = true;
       }
       if(inputs.password == ""){
      errors.password.required = true;
         }
         
       if (!hasError) {
         //sending API Request
         setLoading(true)
        RegisterApi(inputs).then((Response)=>{
         console.log(Response)
        }).catch((err)=>{
         console.log(err)
        }).finally(()=>{
         setLoading(false)
        })
         
       } 
       setErrors(errors)
   }
   const [inputs,setInputs] = useState({
      email:"",
      password:"",
      name:""
   })
   const handleInput = (event)=>{
      setInputs({...inputs,[event.target.name]:event.target.value})
     
   }

  
   return <>
    <section className="register-block">
            <div className="container">
               <div className="row ">
                  <div className="col register-sec">
                     <h2 className="text-center">Register Now</h2>
                     <form onSubmit={handleSubmit} className="register-form" action="" >
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Name</label>
                        <input type="text" className="form-control" onChange={handleInput} name="name" id=""  />
                        {errors.name.required ? 
                        (<span className="text-danger text" >
                            Name is required.
                          </span>):null
                          }
                     </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
          
                        <input type="text"  className="form-control" onChange={handleInput} name="email" id=""  />
                        {errors.email.required ?
                         (<span className="text-danger text">
                            Email is required.
                           </span>):null
                        }
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                        <input  className="form-control" type="password" onChange={handleInput}  name="password" id="" />
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
          
                        <input type="submit" className="btn btn-login float-right" disabled={loading} value="Register"/>
                     </div>
                     <div className="clearfix"></div>
                     <div className="form-group">
                       Already have account ? Please <a href="#">Login</a>
                     </div>
                     </form>
                  </div>
               </div>
            </div>
          </section> 
   </>
}


 




export default RegisterPage