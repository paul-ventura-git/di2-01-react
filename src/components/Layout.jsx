import React from 'react'
import Header from './subcomponentes/Header'
import Footer from './subcomponentes/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Header></Header>
        <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}
