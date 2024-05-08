import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './Nav';
import Home from './Home';
import Sections from './Sections';
import Time from './Time';
import Volunteers from './Volunteers';
import Blog from './Blog';
import Contact from './Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Nav/> */}
    {/* <Home/> */}
    {/* <Sections/> */}
    {/* <Time/> */}
    {/* <Volunteers/> */}
    {/* <Blog/> */}
    <Contact/>

  </React.StrictMode>
);


reportWebVitals();
