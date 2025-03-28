import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router'
import Footer from './Footer'

function Layout() {
  return (
    <section>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </section>
  )
}

export default Layout
