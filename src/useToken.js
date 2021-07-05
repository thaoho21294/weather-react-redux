const getToken = () => {
  const tokenString = localStorage.getItem('token')
  return JSON.parse(tokenString)
}
const saveToken = userToken => {
  localStorage.setItem('token', JSON.stringify(userToken))
}
export {
  getToken,
  saveToken
}
