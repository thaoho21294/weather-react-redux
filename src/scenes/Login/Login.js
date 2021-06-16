import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import './_login.scss'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push('/add')
    }
  })
  const login = async () => {
    console.warn(username, password)
    const item = { username, password }
    let result = await fetch('localhost:3000/login?username=luci&password=1234', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    result = await result.json()
    localStorage.setItem('user-info', JSON.stringify(result))
    history.push('/add')
  }
  return (
    <div className="logreg-forms">
        <form className="form-signin">
            <h3>Sign in</h3>
            <div className="form-group">
                <label>Username</label>
                <input type="name" className="form-control" onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            <button type="submit" onClick={login} className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
    </div>
  )
}

export default Login
