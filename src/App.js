import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from 'components/MainPage';
import ItemInfo from 'components/ItemInfo';
/* import Callback from './Callback/Callback'; */

/* const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}
 */

const App = () => {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/:id/:tab" component={ ItemInfo } />
            {/* <Route path="/home" component={ MainPage } /> */}
            <Route path="/" component={ MainPage } />
            {/* <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback {...props} /> 
              }}/> */}
        </Switch>
      </BrowserRouter>
    )
}

export default App;
