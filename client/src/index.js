import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './pages/Main';
import Blog from './components/blog/Blog';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Sections from './components/sections/Sections';
import Volunteers from './components/volunteer/Volunteers';
import Join from './components/join/Join';
import Register from './pages/register/Register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Main/> */}
  {/* <Home/> */}
  {/* <Sections/> */}
  {/* <Volunteers/> */}
  {/* <Blog/> */}
  {/* <Gallery/> */}
  {/* <Contact/> */}
  {/* <Footer/> */}
  {/* <Join/> */}
  <Register/>
  </React.StrictMode>
);


reportWebVitals();
