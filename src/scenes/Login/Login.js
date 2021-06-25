import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './_login.scss'
import PropTypes from 'prop-types'

const Login = ({ setFoundUser }) => {
  const history = useHistory()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState(null)

  const handleChangUsername = e => {
    setUsername(e.target.value)
  }
  const handleChangePassword = e => {
    setPassword(e.target.value)
  }
  const handleSubmit = async e => {
    const loginUser = async () => {
      return fetch(`http://localhost:3000/login?username=${username}&password=${password}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => response.json())
        .catch((e) => {
          setError(e)
        })
    }
    e.preventDefault()
    const foundUser = await loginUser({
      username,
      password
    })
    if (foundUser) {
      return history.replace('/')
    }
  }
  return (
    <div className='logreg-forms welcome-background'>
      <form className='form-signin'>
        <h3>Sign in</h3>
        <div className='form-group'>
          <label>Username</label>
          <input type='name' className='form-control' value={username} onChange={handleChangUsername} placeholder='Enter Username' />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type='password' className='form-control' value={password} onChange={handleChangePassword} placeholder='Enter password' />
        </div>
        {error && <span className='text-danger form-signin'>Username or password incorrect! </span>}
        <div className='form-group'>
          <div className='custom-control custom-checkbox'>
            <input type='checkbox' className='custom-control-input' id='customCheck1' />
            <label className='custom-control-label' htmlFor='customCheck1'>Remember me</label>
          </div>
        </div>
        <button type='submit' className='btn btn-primary btn-block' onClick={handleSubmit}>Submit</button>
        <p className='forgot-password text-right'>
                Forgot <a href='#'>password?</a>
        </p>
      </form>
    </div>
  )
}

Login.propTypes = {
  setFoundUser: PropTypes.func.isRequired
}

export default Login
