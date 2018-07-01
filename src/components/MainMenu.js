import React from 'react'

import { Route, Link, NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
//import store from '../store'

import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'
import { userConstants } from '../constants/user.constants';
import Logout from '../_helpers/Logout';


const Home = () => (
  <div>
    KOTI
  </div>
)

const MainMenu = () => (
  <div>
    <Menu inverted>
      <Menu.Item as={Link} to="/" >
        home
      </Menu.Item>
      <Menu.Item as={Link} to="/tab1" >
        T1
      </Menu.Item>
      <Menu.Item as={Link} to="/tab2" >
        T2
      </Menu.Item>
      <Menu.Item as={Link} to="/tab3" >
        T3
      </Menu.Item>
      {window.localStorage.getItem(userConstants.LOCAL_STORAGE) ? 
        <Menu.Item position="right" as={Link} to="/logout" >
        logout
        </Menu.Item>
        :
        <Menu.Item position="right" as={Link} to="/login" >
        login
        </Menu.Item>
      }
      
    </Menu>
    <div>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/login" render={() => <LoginForm />} />
      <Route path="/register" render={() => <RegisterForm />} />
      <Route path="/logout" render={() =>  <Logout /> } />

      {/*placeholders*/}
      <Route path="/tab1" render={() => <Tab1 />} />
      <Route path="/tab2" render={() => <Tab2 />} />
      <Route path="/tab3" render={() => <Tab3 />} />
    </div> 
  </div>
)

export default MainMenu