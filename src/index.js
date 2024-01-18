import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); // 하나의 컴포넌트만 렌더 가능하다. <App /><Billy /> 두 컴포넌트 동시 렌더링 불가.