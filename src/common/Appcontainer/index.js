import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Menu from '@/common/Menu';
const AppContainer = () => {


  return (
    <div>
      <h1>Main Application</h1>
      <Menu />
      <Outlet />
    </div>
  );
};

export default AppContainer;