import userService from '../services/user'
import { userConstants } from '../constants/user.constants'
import { history } from '../_helpers/history'
import { Redirect } from 'react-router-dom'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        //loggingIn: true,
        username: action.data
      }      
    case userConstants.LOGIN_SUCCESS:
      window.localStorage.setItem(
        userConstants.LOCAL_STORAGE,
        JSON.stringify(action.data))
      return {
              loggedIn: true,
              user: action.data
              }
    case userConstants.LOGIN_FAILURE:
      return {}
    case userConstants.LOGOUT:
      window.localStorage.clear()
      return {}
    default:
      return state
  }
}

const request = (username) => ({ type: userConstants.LOGIN_REQUEST, data: username })
const success = (user) => ({ type: userConstants.LOGIN_SUCCESS, data: user })
const failure = (error) => ({ type: userConstants.LOGIN_FAILURE, error })

const logout_success = () => ({ type: userConstants.LOGOUT })

export const login = (username, password) => {
  console.log(username, password)
  
  return dispatch => {

    dispatch(request(username))
    //const user = 
    userService.login(
      username,
      password
    )
      .then(
        user => {
          dispatch(success(user))
          history.push('/')
        },
        error => {
          dispatch(failure(error))
        }
      )  
  }
}

export const logout = () => {

  return dispatch => {
    dispatch(logout_success())
  }
}

export default reducer