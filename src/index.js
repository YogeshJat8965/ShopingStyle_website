import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster></Toaster>
      </BrowserRouter>
  </Provider>

);

reportWebVitals();
