import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* The Provider component from react-redux makes the Redux store available to the entire app. */}
      <App />
    </Provider>
  </React.StrictMode>
);
