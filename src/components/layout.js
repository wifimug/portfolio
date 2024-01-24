import React from "react"
import "./layout.css"
import { Footer } from "./footer"
import { NavBar } from "./navbar"

export default function Layout({ children }) {
  return (
  <>
    <NavBar></NavBar>
    <div>{children}</div>
    <Footer></Footer>
  </>
  )
    
}