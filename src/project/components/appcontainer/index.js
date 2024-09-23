import React, { useState } from 'react';

const AppContainer = () => {
  const [src, setSrc] = useState('http://localhost:3000/dashboard.html');

  return (
    <div>
      <h1>Main Application</h1>
      <button onClick={() => setSrc('http://localhost:3000/dashboard.html')}>App 1</button>
      <button onClick={() => setSrc('http://localhost:3000/project.html')}>App 2</button>
      <button onClick={() => setSrc('http://localhost:3000/dashboard.html/test2')}>App 3</button>
      <button onClick={() => setSrc('http://localhost:3000/project.html/test2')}>App 4</button>
      <iframe src={src} width="100%" height="500px" title="App Frame"></iframe>
    </div>
  );
};

export default AppContainer;