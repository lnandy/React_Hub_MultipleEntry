import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '@/common/Login';
import Appcontainer from '@/common/Appcontainer';
import ProtectedRoute from '@/common/ProtectedRoute';
import NotFound from '@/common/404';



let requireComponent  = require.context('./',true,/index\.js$/,'lazy');
requireComponent = requireComponent.keys().filter(fileName => {
	//如果是入口文件index.js，不配置路由
	return fileName.split('/').length > 3 && !fileName.includes('common');
});
//console.log(requireComponent);
const routes = requireComponent.map((fileName) => {
	const componentName = fileName.replace('./', '').replace('index.js', '');
	console.log(fileName);
	return {
		path: `/${componentName.toLowerCase().replace('components/','')}`,
		element: React.lazy(() => import(/* webpackChunkName: "[request]" */`./${componentName}index`))
	};
});

const App = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
				<Route path="/login" element={<LoginPage />} />
					<Route path="/" exact element={<Appcontainer />} />
					<Route element={<ProtectedRoute />}>
					<Route element={<Appcontainer />} >
						{routes.map(({ path, element: Element }) => (
							<Route key={path} path={path} element={<Element />} />
						))}
					 </Route>
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</Router>
	)
};

export default App;

