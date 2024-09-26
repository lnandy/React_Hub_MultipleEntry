import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '@/common/Login/index';
import Appcontainer from '@/common/Appcontainer';
import ProtectedRoute from '@/common/ProtectedRoute';
import NotFound from '@/common/404';


const requireComponent = require.context('./', true, /index\.tsx$/, 'lazy') as {
	keys: () => string[];
	resolve: (id: string) => string;
	id: string;
};
// Filter the keys separately
const filteredKeys = requireComponent.keys().filter(fileName => {
	return fileName.split('/').length > 3 && !fileName.includes('common');
});
interface RouteType {
	path: string;
	element: React.LazyExoticComponent<React.ComponentType<any>>;
}
	
// Use the filtered keys as needed
const routes: RouteType[] = filteredKeys.map(fileName => {
	const componentName = fileName.replace('./', '').replace('index.tsx', '');
	console.log(fileName);
	return {
		path: `/${componentName.toLowerCase().replace('components/','')}`,
		element: React.lazy(() => import(/* webpackChunkName: "[request]" */`./${componentName}index`))
	};
});

// let requireComponent  = require.context('./',true,/index\.tsx$/,'lazy');
// requireComponent = requireComponent.keys().filter(fileName => {
// 	//如果是入口文件index.js，不配置路由
// 	return fileName.split('/').length > 3 && !fileName.includes('common');
// });
// //console.log(requireComponent);
// const routes = requireComponent.map((fileName) => {
// 	const componentName = fileName.replace('./', '').replace('index.js', '');
// 	console.log(fileName);
// 	return {
// 		path: `/${componentName.toLowerCase().replace('components/','')}`,
// 		element: React.lazy(() => import(/* webpackChunkName: "[request]" */`./${componentName}index`))
// 	};
// });

const App = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
				<Route path="/login" element={<LoginPage />} />
					<Route path="/" element={<Appcontainer />} />
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

