import React, { Suspense,useEffect,useRef,useState  } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '@/common/Login/index';
import Appcontainer from '@/common/Appcontainer';
import ProtectedRoute from '@/common/ProtectedRoute';
import NotFound from '@/common/404';
import { UserProvider } from '@/api/user/UserContext';
import { fetch } from '@/api/route/Api';
/*
自动扫描所有文件加下的index作为路由
*/
// const requireComponent = require.context('./', true, /index\.tsx$/, 'lazy') as {
// 	keys: () => string[];
// 	resolve: (id: string) => string;
// 	id: string;
// };

// // Filter the keys separately
// const filteredKeys = requireComponent.keys().filter(fileName => {
// 	return fileName.split('/').length > 3 && !fileName.includes('common');
// });

interface RouteType {
	path: string;
	element: React.LazyExoticComponent<React.ComponentType<any>>;
}
	
// // Use the filtered keys as needed
// const routes: RouteType[] = filteredKeys.map(fileName => {
// 	const componentName = fileName.replace('./', '').replace('index.tsx', '');
// 	console.log(fileName);
// 	return {
// 		path: `/${componentName.toLowerCase().replace('components/','')}`,
// 		element: React.lazy(() => import(/* webpackChunkName: "[request]" */`./${componentName}index`))
// 	};
// });


const App = () => {
	const flag = useRef<boolean>(true);
	const [routes, setRoutes] = useState<RouteType[]>([]);
	useEffect(() => {
		if (flag.current) {
            flag.current = false;
            return;
        }
		// 在组件初始化时执行的方法
		const fetchData = async () => {
			const response = await fetch();
			const fetchedRoutes: RouteType[] = response.map( (item: { path: any; element: string; }) => {
				console.log(item)
				return {
				  path: `/${item.path}`,
				  element: React.lazy(() => import(/* webpackChunkName: "[request]" */`./${item.element}index`))
				};
			  });
			  setRoutes(fetchedRoutes);
			  console.log(fetchedRoutes)
		};
		fetchData();
	}, []); // 空数组作为依赖项，确保只在组件挂载时执行一次
	
	return (
		<UserProvider>
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/login" element={<LoginPage />} />
							<Route path="/"  element={<ProtectedRoute />}>
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
		</UserProvider>
	)
};

export default App;