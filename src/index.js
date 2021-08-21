import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculadora from './calculadora';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Calculadora />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
