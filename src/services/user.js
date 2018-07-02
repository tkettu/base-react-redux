import axios from 'axios'

//const baseUrl = 'http://localhost:3001/users'
const baseUrl = '/api/login'


/* const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
} */

const login = async (username, password) => {
  const credentials = {
    username,
    password
  }
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }