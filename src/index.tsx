import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import Landing from './pages/Landing.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>
);
