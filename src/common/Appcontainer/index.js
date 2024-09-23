import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet  } from 'react-router-dom';
import { Link } from 'react-router-dom';
const AppContainer = () => {
 // const [src, setSrc] = useState('http://localhost:3000/dashboard.html');

  return (
    <div>
      <h1>Main Application</h1>
      <Outlet />
    </div>
  );
};

export default AppContainer;