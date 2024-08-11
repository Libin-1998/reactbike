import logo from "./logo.svg";
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
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Event from "./components/event/Event";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Eventform from "./components/eventform/Eventform";
import Newvolunteer from "./components/newvolunteers/Newvolunteer";
import Eventedit from "./components/editevent/Eventedit";
import VolunteerList from "./components/volunteerList/VolunteerList";
import Volunteeredit from "./components/editvolunteers/Volunteeredit";
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./components/cart/Cart";
import Spareparts from "./components/spareparts/Spareparts";
import Addspare from "./components/addspare/Addspare";
import Profile from "./components/profile/Profile";
import Profileedit from "./components/profileedit/Profileedit";
// import Counter from "./components/counter/Counter";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
<Router>
<div class="container text-center mt-5">
      <div class="row align-items-start">
        <h3 class="col text-warning">
          <b> AUG 12-13-2020</b>
        </h3>
        <h2 class="col">
          <img src={"/img/logo.png"}height={'40px'}></img>
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
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/join" element={<Join/>}/>
    <Route path="/volunteers" element={<Volunteers/>}/>
    <Route path="/sections" element={<Sections/>}/>
    <Route path="/events" element={<Event/>}/>
    {/* <Route  path="/counter" element={<Counter/>}/> */}
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>  
    <Route path="/addevents" element={<Eventform/>}/>  
    <Route path="/newvolunteer" element={<Newvolunteer/>}/>
    <Route path="/eventedit/:id" element={<Eventedit/>}/>
    <Route path="/volform" element={<VolunteerList/>}/>
    <Route path="/volunteeredit/:id" element={<Volunteeredit/>}/>
    <Route path="/carts" element={<Cart/>}/>
    <Route path="/spareparts" element={<Spareparts/>}/>
    <Route path="/addspare" element={<Addspare/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/profileedit/:id" element={<Profileedit/>}/>

      </Routes>
  <Footer/>

</Router>
    </>
  );
}

export default App;
