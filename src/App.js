import React, { useEffect } from 'react';
import './App.scss'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
//store
import { connect } from 'react-redux'
import { fetchFavoriteLocationsAction } from './store/actions/locationActions'
//cmps
import AppHeader from './components/layout/AppHeader/AppHeader';
import HomePage from './pages/HomePage/HomePage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';


function App(props) {

  useEffect(() => {
    props.fetchFavoriteLocations()
  }, [])

  return (
    <Router>
      <div className='App'>
        <AppHeader />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/favorites' component={FavoritesPage} />
        </Switch>
      </div>
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFavoriteLocations: () => dispatch(fetchFavoriteLocationsAction()),
  }
}

export default connect(null, mapDispatchToProps)(App);