import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//cmps
import AppHeader from './components/ui/AppHeader/AppHeader';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader />
            <Switch>    
              <Route exact path='/' component={HomePage} />
              <Route path='/favorites' component={()=>'favorites'} />
            </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
