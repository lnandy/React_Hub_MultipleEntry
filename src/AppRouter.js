import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useRoutes  } from 'react-router-dom';
import LoginPage from '@/common/Login';
import Appcontainer from '@/common/Appcontainer';
import ProtectedRoute from '@/common/ProtectedRoute';
import Menu from '@/common/Menu';
import NotFound from '@/common/404';

// 使用 require.context 动态加载路由组件
// const routeContext = require.context('./',true,/index\.js$/);

// const routes132 = routeContext.keys().map((fileName) => {
//     const componentName = fileName.replace('./', '').replace('index.js', '');
//     return {
// 		 		path: `/${componentName.toLowerCase().replace('components/','')}`,
// 		// 		//element: lazy(() => import(`@/${componentName}index`)),
// 		// 		//import(`./pages/${path}`));
// 		// 		//import(`@/${componentName}`)); 不知道为啥会找到index.html,可能时lazy的配置问题
// 		 		element: React.lazy(() => import(`./${componentName}index`))
// 		 	};
// });

let requireComponent  = require.context('./',true,/index\.js$/,'lazy');
requireComponent = requireComponent.keys().filter(fileName => {
	//如果是入口文件index.js，不配置路由
	return fileName.split('/').length > 3 && !fileName.includes('common');
});
//console.log(requireComponent);
const routes = requireComponent.map((fileName) => {
	const componentName = fileName.replace('./', '').replace('index.js', '');
	//console.log(`./src/${componentName}`);
	console.log(fileName);
	return {
		path: `/${componentName.toLowerCase().replace('components/','')}`,
		//element: lazy(() => import(`@/${componentName}index`)),
		//import(`./pages/${path}`));
		//import(`@/${componentName}`)); 不知道为啥会找到index.html,可能时lazy的配置问题
		element: React.lazy(() => import(`/* webpackChunkName: "${componentName}" */ ./${componentName}index`))
	};
});
//console.log(routes)
// const App = () => (
// 	<Router>
// 		<Routes>
// 			<Route path="/login" element={<LoginPage />} />
// 			<Route path="/" exact element={<Appcontainer />} />
// 			<Route element={<ProtectedRoute />}>
// 					<Route element={<Appcontainer />} >
// 						<Route path="/dashboard/test" element={<Test />} >
// 							<Route path="/dashboard/test/test2" element={<Test2 />} />
// 						</Route>
// 						<Route path="/Test2" element={<Test2 />} />
// 					</Route>
// 			</Route>
// 			<Route path="*" element={<NotFound />} />
// 		</Routes>
// 	</Router>
// );
//import glob from 'glob';
// import globAll from 'glob-all';
// // 使用 glob 来导入特定目录下的所有模块


// // // 使用 glob 来导入特定目录下的所有模块
// // glob.sync('./src/components/**/*.js').forEach(filePath => {
// // 	console.log(filePath);
// // 	// 对模块进行你需要的操作
// //   });
   
//   // 使用 glob-all 来验证模式是否匹配到文件
//   globAll.sync(['./src/components/**/*.js']).forEach(filePath => {
// 	console.log(filePath); // 打印匹配到的文件路径
//   });

//const Test = React.lazy(() => import('./dashboard/components/test'));
//const Test2 = React.lazy(() => import('./dashboard/components/test2'));

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
					{/* <Route path="dashboard/test" element={<Test />} />
					<Route path="dashboard/test2" element={<Test2 />} /> */}
				</Routes>
			</Suspense>
		</Router>
	)
};

export default App;

