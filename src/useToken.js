import { useState } from 'react'

const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem('token')
    // console.log(tokenString)
    const userToken = JSON.parse(tokenString)
    console.log(userToken)
    // console.log(userToken?.token)
    return userToken?.token
  }

  const [token, setToken] = useState(getToken())
  // console.log(token)
  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken))
    setToken(userToken.token)
  }
  console.log(token)
  return {
    setToken: saveToken,
    token
  }
}
export default useToken
