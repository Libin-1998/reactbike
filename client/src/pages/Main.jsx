import React from 'react'
import Nav from '../components/nav/Nav'
import Home from '../components/home/Home'
import Sections from '../components/sections/Sections'
import Volunteers from '../components/volunteer/Volunteers'
import Contact from '../components/contact/Contact'
import Blog from '../components/blog/Blog'
import Join from '../components/join/Join'
import Footer from '../components/footer/Footer'

export default function Main() {
  return (
    <>
    <div class="container text-center mt-5">
      <div class="row align-items-start">
        <h3 class="col text-warning">
          <b> AUG 12-13-2020</b>
        </h3>
        <h2 class="col">
          <b>CORREDO</b>
        </h2>
        <div class="col mt-2">
          <i class="bi bi-pinterest p-2 me-1 bg-warning"></i>
          <i class="bi bi-instagram p-2 me-1 bg-warning"></i>
          <i class="bi bi-twitter p-2 me-1 bg-warning"></i>
          <i class="bi bi-facebook p-2 me-1 bg-warning"></i>
        </div>
      </div>
    </div>
    <Nav />
    <Home />
    <Sections />
    <Volunteers />
    <Contact />
    <Blog/>
    <Join/>
    <Footer/>
  </>
  )
}
