import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Context from './components/Context/Context';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Context>
        <App />
      </Context>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

