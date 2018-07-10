import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { BrowserRouter as Router } from 'react-router-dom'
import { Router } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import store from './store'
import logo from './logo.svg'
import './App.css'

import { history } from './_helpers/history'
import MainMenu from './components/MainMenu'
import { clearMsg } from './reducers/messageReducer'

const Home = () => (
  <div>
    KOTI
    {store.getState()}
  </div>
)

class App extends Component {
  constructor(props) {
    super(props)

    history.listen((location, action) => {
      console.log('CLEARETAAN MESSAGET ')
      
      props.clearMsg()
    })
  }
  componentDidMount = () => {
    //console.log(store.getState())
    
  }
  render() {
    return (
      <Container>
        <Router history={history}>
          <MainMenu />
        </Router>
      </Container>
    )
  }
}

export default connect(
  null,
  { clearMsg }
)(App)
