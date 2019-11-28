import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
//store
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
const store = createStore(rootReducer)

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>
   , document.getElementById('root'));

