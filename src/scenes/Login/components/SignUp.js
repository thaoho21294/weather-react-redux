import React from 'react'

const SignUp = () => {
  return (
  <form>
        <h3>Sign Up</h3>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>
            <div className="form-group">
                <label>Display name</label>
                <input type="email" className="form-control" placeholder="Enter display name" />
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                <label className="custom-control-label" htmlFor="customCheck2">You are Admin</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
            </p>
        </form>
  )
}

export default SignUp
