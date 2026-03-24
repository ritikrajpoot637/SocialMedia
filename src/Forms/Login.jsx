import React, { useActionState } from 'react'
import { Link, useActionData } from 'react-router'
import { Navigate, useNavigate } from 'react-router'
import { useFormStatus } from "react-dom";
import { useEffect } from 'react';

const handle=async(prevdata,fromdata)=>{
  //  let res= await fetch("url",{
  //     method:post,
  //     body:JSON.stringify('')
  //   })
  await new Promise(resolve=>setTimeout(resolve,3000))
    let email=fromdata.get('email')
    let password=fromdata.get('password')
    
    let data=JSON.parse(localStorage.getItem('data'));
     
      if(data.email==email&&data.password==password){
        
        return{success:"pass"}
        
      }
      else{
        return  {error:"user is not defined"}

      }
}
const Login = () => {
    const navigate=useNavigate();
    const [state,formAction]=useActionState(handle,{})
    
        useEffect(()=>{
          if(state.success) navigate('/postList')
        },[state,navigate])
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-4">
          {/* Card with shadow for a clean floating look */}
          <div className="card shadow border-0 rounded-4">
            <div className="card-body p-4 p-sm-5">
              <h2 className="text-center fw-bold mb-4">Welcome Back</h2>
              
              <form action={formAction}>
                {/* Email Input */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control py-2 rounded-3" 
                    placeholder="name@example.com" 
                    required 
                    name='email'
                  />
                </div>

                {/* Password Input */}
                <div className="mb-2">
                  <div className="d-flex justify-content-between">
                    <label className="form-label fw-semibold">Password</label>
                    
                  </div>
                  <input 
                    type="password" 
                    className="form-control py-2 rounded-3" 
                    placeholder="••••••••" 
                    required 
                    name='password'
                  />
                </div>

                {/* Remember Me Checkbox */}
                <div className="mb-4 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label small text-muted" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>

              <SectionButton/>

                {/* Link to Registration */}
                <p className="text-center mt-4 text-muted small">
                  New here? <Link to='/' className="text-decoration-none fw-bold">Create account</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
const SectionButton=()=>{
  const {pending}=useFormStatus()
  return(
    <div className="d-grid">
                  <button type="submit" disabled={pending} className="btn btn-primary btn-lg fw-bold rounded-pill">
                    Sign Up
                  </button>
                </div>
  )
}
