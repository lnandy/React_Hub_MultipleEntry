# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### 配置多入口

/*自定义part*/ 
  const glob = require('glob');

  // 使用 glob 匹配所有页面的入口文件
  const entries = glob.sync('./src/*/index.js').reduce((acc, file) => {
    const entry = path.basename(path.dirname(file));
    acc[entry] = './'+file;
    return acc;
  }, {});
  // 动态生成 HtmlWebpackPlugin 实例
  const htmlPlugins = Object.keys(entries).map(entry => {
    return new HtmlWebpackPlugin({
      inject: true,
      filename: `${entry}.html`,
      template: `./src/${entry}/index.html`,
      //template: paths.appHtml,
      chunks: [entry],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    });
  });
  ....

  entry: entries,

  ...

  plugins: [
      ...htmlPlugins,

### 配置多入口后运行报错
Could not find a required file.
Name: index.js
Searched in: /home/workspace/reacthub_multiple/src

注释script下面代码
// if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
//   process.exit(1);
// }

### 配置好多页面后设置默认页面不生效，需要删除public下index.html

rewrites: [
    { from: /^\/dashboard/, to: '/dashboard.html' },
    { from: /^\/project/, to: '/project.html' },
    { from: /^\/frame/, to: '/frame.html' },
    { from: /^\/home/, to: '/home.html' },
    { from: /./, to: '/frame.html' },
]

### react通过webpack的require.context来扫描文件路径实现路由懒加载，需要注意设置第四个参数，否则扫描时即加载所有模块
https://webpack.js.org/api/module-methods/#requirecontext
let requireComponent  = require.context('./',true,/index\.js$/,'lazy');

### 配置多入口后通过serve 预览dist内的文件，需要通过serve.json配置url re-writes
在根目录创建serve.json
{
    "rewrites": [
      { "source": "/dashboard/**", "destination": "/dashboard.html" },
      { "source": "/project/**", "destination": "/project.html" },
      { "source": "/", "destination": "/dashboard.html" }
    ]
  }
进入dist文件夹运行"serve -c ../serve.json"

### 多入口Nginx配置
root /home/workspace/reacthub_multiple/dist;
index index.html dashboard.html project.html;

location /dashboard {
    #root  /home/workspace/reacthub_multiple/dist;
    #index  index.html index.htm dashboard.html project.html;
        try_files $uri $uri/ /dashboard.html;
}

location /project{
        try_files $uri $uri /project.html;
}