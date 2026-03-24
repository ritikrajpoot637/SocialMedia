import React, { useActionState, useEffect } from 'react'
import { Navigate, useFormAction, useNavigate } from 'react-router'
import { Link } from 'react-router';
import { useFormStatus } from "react-dom";


 const  handle=async(prevData,fromData)=>{ //nedd to parameter
       const name=fromData.get('firstName');
       const email=fromData.get('lastName');
       const dataobj=Object.fromEntries(fromData.entries());
         localStorage.setItem('data', JSON.stringify(dataobj));
        let res =await fetch ('url',{
          method:'post',
          body:JSON.stringify({email})
        })
      // Corrected Delay
await new Promise(resolve => setTimeout(resolve, 3000));
  return {success:"done"}
     

    
    

    }



const Registration = () => {
    let navigate=useNavigate();
    const[state,fomAction]=useActionState(handle,{});


    useEffect(()=>{
      if(state.success) navigate('/login')
    },[state,navigate])

   


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4 p-sm-5">
              <h2 className="text-center fw-bold mb-4">Create Account</h2>
              
              <form action={fomAction}>
                <div className="row g-2 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">First Name</label>
                    <input name='firstName' type="text" className="form-control py-2" placeholder="First Name" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Last Name</label>
                    <input name='lastName' type="text" className="form-control py-2" placeholder="Last Name" required />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Username</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">@</span>
                    <input name='username' type="text" className="form-control py-2 border-start-0" placeholder="username" required />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input name='email' type="email" className="form-control py-2" placeholder="name@example.com" required />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Password</label>
                  <input name='password' type="password" className="form-control py-2" placeholder="••••••••" required />
                </div>
                <SectionButton/> 
               
                <p className="text-center mt-4 text-muted small">
                {state?.error && <i style={{ color: "red" }}>{state.error}</i>}
                {state?.success && <i style={{ color: "green" }}>{state.success}</i>}
                </p>
                
                <p className="text-center mt-4 text-muted small">
                  Already have an account? <Link to={'/login'} className="text-decoration-none fw-bold">Log In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
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

