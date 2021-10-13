import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {createStore} from 'redux';
import root from './Reducer/index';
import { Provider } from 'react-redux'

const  store = createStore(
  root,
);
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode> 
      <App />
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
)
