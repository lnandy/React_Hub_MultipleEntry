import React from 'react';
import './login.css'
import LoginComponent from './components/login';

const Login: React.FC = () => (
  <div className="loginContainer">
    <div className="loginStage">
      <LoginComponent />
    </div>
  </div>
);

export default Login;