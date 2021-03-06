import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
//store
import { createStore, applyMiddleware, subscribe } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => {
   // console.log('new state', store.getState())
})

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>
   , document.getElementById('root'));

