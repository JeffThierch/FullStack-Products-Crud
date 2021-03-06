import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import App from './App';
import AplicationProvider from './context/AplicationProvider';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <AplicationProvider>
          <App />
        </AplicationProvider>
      </Provider>
    </StrictMode>
  </BrowserRouter>,
);
