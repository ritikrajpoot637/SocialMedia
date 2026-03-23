import React from 'react'
import { Link } from 'react-router'
import { Navigate, useNavigate } from 'react-router'

const Login = () => {
    const navigate=useNavigate();
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-4">
          {/* Card with shadow for a clean floating look */}
          <div className="card shadow border-0 rounded-4">
            <div className="card-body p-4 p-sm-5">
              <h2 className="text-center fw-bold mb-4">Welcome Back</h2>
              
              <form>
                {/* Email Input */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control py-2 rounded-3" 
                    placeholder="name@example.com" 
                    required 
                  />
                </div>

                {/* Password Input */}
                <div className="mb-2">
                  <div className="d-flex justify-content-between">
                    <label className="form-label fw-semibold">Password</label>
                    <a href="#" className="text-decoration-none small fw-bold">Forgot?</a>
                  </div>
                  <input 
                    type="password" 
                    className="form-control py-2 rounded-3" 
                    placeholder="••••••••" 
                    required 
                  />
                </div>

                {/* Remember Me Checkbox */}
                <div className="mb-4 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label small text-muted" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>

                {/* Login Button */}
                <div className="d-grid">
                  <button type="submit" onClick={()=>{navigate('/postList')}} className="btn btn-primary btn-lg fw-bold rounded-pill">
                    Log In
                  </button>
                </div>

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
