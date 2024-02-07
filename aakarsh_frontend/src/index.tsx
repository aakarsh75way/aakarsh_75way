// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'; 
import { Provider } from 'react-redux';
import store from './utils/createStore';
import "./styles.css"
const rootElement: HTMLElement | null = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(

    <Provider store={store} >

    <App />
    </Provider>
, 
    rootElement);
}
