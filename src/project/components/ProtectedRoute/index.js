import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
	const isAuth = !!localStorage.getItem('token'); // 假设你用 token 判断用户是否登录
	//return isAuth ? children : <Navigate to="/login" />;
	return children;
	// const to = new URL('dashboard.html', window.location.origin).href;
	// console.log(to);
	// //return;
	// //return <Navigate to={to} replace />;
	// //window.location.assign(to);
	// window.location.href = window.location.origin+"/dashboard.html";
	// //return window.location.href = window.location.origin+"/dashboard.html";
};

export default ProtectedRoute;