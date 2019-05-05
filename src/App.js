import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import ItemInfo from './components/ItemInfo';

function App() {
  return (
    // <div className="App">
    //   <MainPage />
    // </div>
    <BrowserRouter>
        <Switch>
          <Route path="/:id" component={ ItemInfo } />
          <Route path="/" component={ MainPage } />
        </Switch>
    </BrowserRouter> 
  );
}

export default App;
