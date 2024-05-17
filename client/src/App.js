import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Main from "./pages/Main";
import Nav from "./components/nav/Nav";
import Contact from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";
import Blog from "./components/blog/Blog";
import Join from "./components/join/Join";
import Volunteers from "./components/volunteer/Volunteers";
import Sections from "./components/sections/Sections";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
<Router>
<div class="container text-center mt-5">
      <div class="row align-items-start">
        <h3 class="col text-warning">
          <b> AUG 12-13-2020</b>
        </h3>
        <h2 class="col">
          <img src={"./img/logo.png"}height={'40px'}></img>
        </h2>
        <div class="col mt-2">
          <i class="bi bi-pinterest p-2 me-1 bg-warning"></i>
          <i class="bi bi-instagram p-2 me-1 bg-warning"></i>
          <i class="bi bi-twitter p-2 me-1 bg-warning"></i>
          <i class="bi bi-facebook p-2 me-1 bg-warning"></i>
        </div>
      </div>
    </div>
    <Nav/>
  <Routes>
    <Route exact path="/" element={<Main/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/gallery" element={<Gallery/>}/>
    <Route exact path="/blog" element={<Blog/>}/>
    <Route exact path="/join" element={<Join/>}/>
    <Route exact path="/volunteers" element={<Volunteers/>}/>
    <Route exact path="/sections" element={<Sections/>}/>
    
  </Routes>
  <Footer/>
</Router>
    </>
  );
}

export default App;
