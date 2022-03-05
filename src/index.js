import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  token: null,
  username: null, 
  role: null
}
const reducer = (state = defaultState, action) => {
  switch (action.type){
    case "ADD_TOKEN":
      return {...state, token: action.payload}
    case "DELETE_TOKEN":
      return {...state, token: null}
    case "ADD_USERNAME":
      return {...state, username: action.payload}
    case "DELETE_USERNAME":
      return {...state, username: null}
    case "ADD_ROLE":
      return {...state, role: action.payload}
    case "DELETE_ROLE":
      return {...state, role: null}

    default:
      return state
  }
}
const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App /> 
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);