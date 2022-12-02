import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import {Counter} from './components/Counter';
import CounterContainer from './containers/Counter';

import {counterApp} from './reducers'

import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(counterApp)
render(<Provider store={store}><CounterContainer /></Provider>, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


