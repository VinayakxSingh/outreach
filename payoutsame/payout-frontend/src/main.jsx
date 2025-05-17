import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Analytics } from '@vercel/analytics/react';
import { initSmoothScroll } from './utils/lenis';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);

// Initialize smooth scrolling
initSmoothScroll();
