import React from 'react'
import Home from '../components/home/Home'
import Sections from '../components/sections/Sections'
import Volunteers from '../components/volunteer/Volunteers'
import Contact from '../components/contact/Contact'
import Blog from '../components/blog/Blog'
import Join from '../components/join/Join'
import Gallery from '../components/gallery/Gallery'

export default function Main() {
  return (
    <>
    <Home />
    <Sections />
    <Volunteers />
    <Blog/>
    <Gallery/>
    <Contact />
    <Join/>
  </>
  )
}
