import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Create from './components/create';

ReactDOM.render(
  <BrowserRouter>
     <App />
     <Create />
  </BrowserRouter>, document.getElementById('root')
);


reportWebVitals();
