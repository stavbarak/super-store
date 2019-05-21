import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import MainPage from './components/MainPage';
import ItemInfo from './components/ItemInfo';

import Auth from './Auth/Auth.js';

/* const auth = new Auth();
auth.login(); */

class App extends Component {
  goTo = (route) => {
    this.props.history.replace(`/${route}`)
  }

  login = () => {
    this.props.auth.login();
  }

  logout = () => {
    this.props.auth.logout();
  }
  render(){
    
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/:id/:tab" component={ ItemInfo } />
            <Route path="/" component={ MainPage } />
          </Switch>
      </BrowserRouter> 
    )
  }
}

export default App;
