import React from 'react'
import { Navigate, useNavigate } from 'react-router'
import { Link } from 'react-router';

const Registration = () => {
    const navigate=useNavigate();
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          {/* Card adds a professional "Social Media" feel */}
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4 p-sm-5">
              <h2 className="text-center fw-bold mb-4">Create Account</h2>
              
              <form>
                {/* First and Last Name Row */}
                <div className="row g-2 mb-3">
                  <div className="col-md-6">
                    <label   className="form-label fw-semibold">First Name</label>
                    <input type="text" className="form-control py-2" placeholder="First Name"  />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Last Name</label>
                    <input type="text" className="form-control py-2" placeholder="Last Name"  />
                  </div>
                </div>

                {/* Username Input Group */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Username</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">@</span>
                    <input type="text" className="form-control py-2 border-start-0" placeholder="username"  />
                  </div>
                </div>

                {/* Email Input */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input type="email" className="form-control py-2" placeholder="name@example.com"  />
                </div>

                {/* Password Input */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Password</label>
                  <input type="password" className="form-control py-2" placeholder="••••••••"  />
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg fw-bold rounded-pill">
                    Sign Up
                  </button>
                </div>
                
                <p className="text-center mt-4 text-muted small">
                Already have an account? <Link to ={'/login'}className="text-decoration-none fw-bold">Log In</Link>
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
