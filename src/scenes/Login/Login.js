import React, { useState } from 'react'
import './_login.scss'
import fetch from 'node-fetch'
import PropTypes from 'prop-types'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

const Login = ({ setFoundUser }) => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const loginUser = async () => {
    return fetch(`http://localhost:3000/login?username=${username}&password=${password}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
  }
  const handleChangUsername = e => {
    setUsername(e.target.value)
  }
  const handleChangePassword = e => {
    setPassword(e.target.value)
  }
  const handleSubmit = async e => {
    e.preventDefault()
    const foundUser = await loginUser({
      username,
      password
    })
    setLoading(true)
    setError(null)
    if (setFoundUser(foundUser)) {
      return history.replace({ pathname: '/' })
    } else {
      return <Login />
    }
  }

  return (
    <div className='logreg-forms welcome-background'>
      <form className='form-signin' onSubmit={handleSubmit}>
        <h3>Sign in</h3>
        <div className='form-group'>
          <label>Username</label>
          <input type='name' className='form-control' value={username} onChange={handleChangUsername} placeholder='Enter Username' />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type='password' className='form-control' value={password} onChange={handleChangePassword} placeholder='Enter password' />
        </div>
        <div className='form-group'>
          <div className='custom-control custom-checkbox'>
            <input type='checkbox' className='custom-control-input' id='customCheck1' />
            <label className='custom-control-label' htmlFor='customCheck1'>Remember me</label>
          </div>
        </div>
        {error && <div className='text-danger'>{error}</div>}
        <button type='submit' className='btn btn-primary btn-block'>Submit</button>
        <p className='forgot-password text-right'>
                Forgot <a href='#'>password?</a>
        </p>
      </form>
      {loading && <div className='text-info'>loading...</div>}
    </div>
  )
}

Login.propTypes = {
  setFoundUser: PropTypes.func.isRequired
}

export default Login
