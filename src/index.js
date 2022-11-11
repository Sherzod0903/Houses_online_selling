import React from 'react';
import ReactDOM from 'react-dom/client';
import RootContext from './context';
import './index.css';
import Root from './root';
// import 'antd/dist/antd.min.css'
import 'antd/dist/antd.less'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      
    <RootContext>
    </RootContext>
<Root/>
  </React.StrictMode>
)