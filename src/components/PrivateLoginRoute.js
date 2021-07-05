import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getToken } from '../useToken'
import PropTypes from 'prop-types'

const PrivateLoginRoute = ({ component: Component, ...rest }) => {
  return (
        <Route {...rest} render={props => (
          getToken() ? <Redirect to="/" /> : <Component {...props} />
        )} />
  )
}

PrivateLoginRoute.propTypes = {
  component: PropTypes.func.isRequired
}

export default PrivateLoginRoute
