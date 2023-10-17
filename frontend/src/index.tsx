import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import reduxStore from './store/redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

let persistor = persistStore(reduxStore);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={reduxStore} >
  {/* //   <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
  {/* //   </PersistGate> */}
  </Provider>
);

