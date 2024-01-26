import * as React from "react"
import { NavBar } from "../components/navbar"
import "../components/about.css"

const About = () => {
  return (
    <main>
      
      <div className="landing">
      <NavBar></NavBar>
      
      <h1> About me </h1>
      <p> A cat, an artist, a pianist, a gym rat.</p>
      <p> A software developer.</p>
      </div>
    </main>
  )
}

export default About

export const Head = () => <title>About</title>
