import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18

import './styles/font.css';
import './styles/tailwind.css';
import { App } from './app.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('app')); // Create the root
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);
