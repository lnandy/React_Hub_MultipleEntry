import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from '@/AppRouter';
//import Test from './route';
import { BrowserRouter as Router, Routes, Route, Outlet  } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>dashboard
    <AppRouter />
  </React.StrictMode>
);


