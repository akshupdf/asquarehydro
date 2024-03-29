import React from 'react';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import ReactDOM from 'react-dom';

const store = configureStore({
  reducer : rootReducer})

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider> ,
document.getElementById('root')
);


