import userService from '../services/users'
import { userConstants } from '../constants/user.constants'
import { history } from '../_helpers/history'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return action.data
    case userConstants.REGISTER_SUCCESS:
      return action.data
    case userConstants.REGISTER_FAILURE:
      return {}
    default:
      return state
  }
}

const request = (user) => ({ type: userConstants.REGISTER_REQUEST, data: user })
const success = (user) => ({ type: userConstants.REGISTER_SUCCESS, data: user })
const failure = (error) => ({ type: userConstants.REGISTER_FAILURE, error })

export const register = (user) => {
  console.log(user)
  
  return dispatch => {
    dispatch(request(user))

    userService.register(user)
      .then(
        user => {
          dispatch(success(user))
          history.push('/login')
          //alertactions Registration succesfull
        },
        error => {
          dispatch(failure(error))
        }
      )
  }
}

export default reducer
