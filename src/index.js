import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  user: null,
  posts: null,
  lessons: null,
}
const reducer = (state = defaultState, action) => {
  switch (action.type){
    case "ADD_USER":
      return {...state, user: action.payload}
    case "DELETE_USER":
      return {...state, user: null}
    case "ADD_POSTS":
      return {...state, posts: action.payload}
    case "ADD_LESSONS":
      return {...state, lessons: action.payload}
   
    
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