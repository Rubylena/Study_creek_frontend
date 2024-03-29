import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import ContextProvider from './context/contextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
  <Router>
    <App />
  </Router>
  </ContextProvider>
 
);

