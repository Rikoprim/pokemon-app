import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApiService } from './services/api';
import { Provider } from 'react-redux';
import store from './redux/store';

// Style import
import './assert/style/globalStyle.css'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={ApiService}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
