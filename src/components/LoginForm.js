import React from 'react'

import { connect } from 'react-redux'
import { Button, Form, Grid, Header,
  Message, Segment }
   from 'semantic-ui-react'

import { Link } from 'react-router-dom'

import { login } from '../reducers/loginReducer'
import Notification from './Notification';
import store from '../store';


class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      submitted: false,
      //error: null
    }
  }

  handleLoginFieldChange = (e) => {
    
    this.setState({ [e.target.name]: e.target.value })
  }


  handleClick = (e) => {
    e.preventDefault()
   
    this.setState({ submitted: true })
     
    const { username, password } = this.state
    if(username && password){
      this.props.login({ username, password })
    }
  }

  render() {
    const { submitted } = this.state
   
    /* if (this.props.loggingIn){
       console.log('VAaRIN LOGATTU')
       return null
    }  */
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
                  {/*<Image src='/logo.png' />*/} Kirjaudu
                </Header>
                <Notification />
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
                      {this.props.loggingIn ? 'Kirjaudutaan...' : 'Kirjaudu'}
                    </Button>
                      {this.props.loggingIn && <p> Kirjaudutaan... </p>}
                    {/*store.getState().loginReducer.loggingIn ? <p>logging..</p> : <p />*/}
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

const mapStateToProps = (state) => {
  return {
    loggingIn: store.getState().loginReducer.loggingIn
  }
}

export default connect(
  mapStateToProps,
  { login }
)(LoginForm)