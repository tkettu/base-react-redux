import axios from 'axios'

//const baseUrl = 'http://localhost:3001/users'
const baseUrl = '/api/login'


/* const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
} */

const login = async (username, password) => {
  console.log('usERservice', username)
  
  const credentials = {
    username,
    password
  }

 /*  const users = await getAll()
  console.log(users)
  const usersArray = users.map(u => u.username)
  console.log(usersArray)
  const lupa = usersArray.includes(username)
  console.log(lupa) */
  
  //Vertaa credentialsseja, tehdään backenddi tätä varten 
  // Mutta frontend dev aikana katsotaan username, löytyyko ja onko sillä oikea salasana
  const response = await axios.post(baseUrl, credentials)
  console.log('LOGIN RESPONSE:', response)
  

  return response.data
   /* if (lupa){

    return "201"
  } 
  
  //console.log(response)
  
  return "401" */
}

export default { login }