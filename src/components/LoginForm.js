import React from 'react'

import { connect } from 'react-redux'
import { Button, Form, Grid, Header,
  Message, Segment }
   from 'semantic-ui-react'

import { Link, Redirect } from 'react-router-dom'

import { login } from '../reducers/loginReducer'
import { userConstants } from '../constants/user.constants';
//import Register from './RegisterForm'
import store from '../store'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    //this.props.dispatch(logout)
    //this.props.logout()

    this.state = {
      username: '',
      password: '',
      submitted: false
    }
  }

  handleLoginFieldChange = (e) => {
    
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = (e) => {
    e.preventDefault()
    console.log('Logging as', this.state.username)
    const { username, password } = this.state

    this.props.login(username, password)
    this.setState({ submitted: true })
   /*  const { username, password } = this.state
    if(username && password){
      this.props.login({ username, password })
      this.setState({ submitted: true })
      this.props.history.push('/')
    }//else username or password wrongeja */
  }

  render() {
    const { submitted } = this.state
    console.log(
     store.getState())
   if (store.getState().loginReducer.user && submitted) {
      //console.log('SUER', window.localStorage.getItem(userConstants.LOCAL_STORAGE))
      //if (window.localStorage.getItem(userConstants.LOCAL_STORAGE)){
          return <Redirect to='/' />
      //}
      //if loggedIn -> Redirect, else ilmoita virheestä 
      //return <Redirect to='/' />
    //}
   }
    return (
      <div className='login-form'>
        <div>
        <style>{`
              body > div,
              body > div > div,
              body > div > div > div.login-form {
                height: 100%;
              }
            `}</style>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                  {/*<Image src='/logo.png' />*/} Log-in to your account
                </Header>
                <Form size='large'>
                  <Segment stacked>
                    <Form.Input 
                      name='username'
                      onChange={this.handleLoginFieldChange}
                      fluid 
                      icon='user'
                      iconPosition='left'
                      placeholder='User name' />
                    <Form.Input
                      name='password'
                      onChange={this.handleLoginFieldChange}
                      fluid
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type='password'
                    />
    
                    <Button onClick={this.handleClick} color='teal' fluid size='large'>
                      Login
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  New to us? <Link to='/register'>Sign up</Link>
                </Message>
              </Grid.Column>
           </Grid>
          </div>
        </div>
    )
  }
}

export default connect(
  null,
  { login }
)(LoginForm)