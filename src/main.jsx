import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { Provider } from  'react-redux';
import { GetRickAndMorty } from './GetRickAndMorty'
import './style.css';
import { store } from './store/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GetRickAndMorty />
    </Provider>
  </React.StrictMode>,
)
