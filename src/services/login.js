import axios from 'axios'

//const baseUrl = 'http://localhost:3001/users'
const baseUrl = '/api/login'


/* const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
} */

const login = async (credentials) => {
  /* const credentials = {
    username,
    password
  } */
  const response = await axios.post(baseUrl, credentials)
  console.log(response.data)
   
  return response.data
}

export default { login }