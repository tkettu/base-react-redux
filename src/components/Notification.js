import React from 'react'
import store from '../store'

class Notification extends React.Component {

  render() {
    console.log('RENREDING NOTIFICATION')
    
    const msg = store.getState().messageReducer === null ?
                  null :
                  store.getState().messageReducer.message

    return <Message message={msg} />
  }
}

const Message = ({ message }) => {
  return ( message === null ? null :
            (
              <div className="error">
                  {message}
              </div>
            )
          )
}

export default Notification