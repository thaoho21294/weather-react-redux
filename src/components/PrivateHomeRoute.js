import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getToken } from '../useToken'
import PropTypes from 'prop-types'

const PrivateHomeRoute = ({ component: Component, ...rest }) => {
  return (
        <Route {...rest} render={props => (
          getToken() ? <Component {...props} /> : <Redirect to="/login" />
        )} />
  )
}

PrivateHomeRoute.propTypes = {
  component: PropTypes.func.isRequired
}

export default PrivateHomeRoute
