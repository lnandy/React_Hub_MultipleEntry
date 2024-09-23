import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet  } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Test = () => (
  <div>
    <h1>Test 1 dashboard<Outlet /><Link to="/dashboard/test2">goto test2????</Link></h1>
  </div>
);

export default Test