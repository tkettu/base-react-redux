import axios from 'axios'

const baseUrl = '/api/users'

const register = async (user) => {
  const response = await axios.post(baseUrl,user)
  console.log(response.data)
  
  return response.data
}

export default { register }