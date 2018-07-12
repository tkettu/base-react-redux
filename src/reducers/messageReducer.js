import { messageConstants  } from '../constants/message.constants'

const initialState = null //'No new messages'

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case messageConstants.SUCCESS:
      return {
        type: 'message-success',
        message: action.message
      }
    case messageConstants.ERROR:
      return {
        type: 'message-error',
        message: action.message
      }
    case messageConstants.CLEAR:
      return null
    default:
      return state
  }
}

export const success = (message) => {
  return dispatch => {
    dispatch({
      type: messageConstants.SUCCESS,
      message
    })
  }
}

export const errorMsg = (message) => {
  console.log(message)
  
  return dispatch => {
    dispatch({
      type: messageConstants.ERROR,
      message
    })
  }
}

export const clearMsg = () => {
  return dispatch => {
    dispatch({
      type: messageConstants.CLEAR
    })
  }
}

export default reducer