import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//cmps
import AppHeader from './components/ui/AppHeader/AppHeader';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader />
            <Switch>    
              <Route path='/' component={()=>'home'} />
              <Route path='/favorites' component={()=>'favorites'} />
            </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
