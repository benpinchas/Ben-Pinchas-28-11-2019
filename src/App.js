import React from 'react';
import './App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//store
import {connect} from 'react-redux'
//cmps
import AppHeader from './components/layout/AppHeader/AppHeader';
import HomePage from './pages/HomePage/HomePage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className='App'>
        <AppHeader />
            <Switch>    
              <Route exact path='/' component={HomePage} />
              <Route path='/favorites' component={FavoritesPage} />
            </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
