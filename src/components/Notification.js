import React from 'react'
import store from '../store'
import { connect } from 'react-redux'

class Notification extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return <Message message={this.props.message} />
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

const mapStateToProps = (state) => {
  return {
    message: store.getState().messageReducer === null ?
              null :
              store.getState().messageReducer.message
  }
}

export default connect(
  mapStateToProps
 )(Notification)