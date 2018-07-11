import loginService from '../services/login'
import { userConstants } from '../constants/user.constants'
import { history } from '../_helpers/history'
import { errorMsg } from './messageReducer'


const reducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        username: action.data
      }      
    case userConstants.LOGIN_SUCCESS:
      window.localStorage.setItem(
        userConstants.LOCAL_STORAGE,
        JSON.stringify(action.data))
      return {
              loggingIn: false,
              loggedIn: true,
              user: action.data
              }
    case userConstants.LOGIN_FAILURE:
      return {loggingIn: false}
    case userConstants.LOGOUT:
      window.localStorage.clear()
      return {
              loggingIn: false,
              loggedIn: false
            }
    default:
      return state
  }
}

const request = (username) => ({ type: userConstants.LOGIN_REQUEST, data: username })
const success = (user) => ({ type: userConstants.LOGIN_SUCCESS, data: user })
const failure = (error) => ({ type: userConstants.LOGIN_FAILURE, error })

const logout_success = () => ({ type: userConstants.LOGOUT })

export const login = ({username, password}) => {
  console.log(username, password)
  const credentials = {username, password}
  return dispatch => {

    dispatch(request(username))
    loginService.login(
      credentials
    )
      .then(
        user => {
          dispatch(success(user))
          history.push('/')
        },
        error => {
          dispatch(failure(error))
          console.log(error)
          dispatch(errorMsg('vaarin'))
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