import React from 'react'
import NavBar from'../NavBar/Navbar.jsx'
import Footer from'../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <div>
    <NavBar />
    <Outlet></Outlet>
    <Footer />
    </div>

)
}
