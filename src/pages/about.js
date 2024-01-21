import * as React from "react"
import { NavBar } from "../components/navbar"

const About = () => {
  return (
    <main>
      <NavBar></NavBar>
      <h1> About me </h1>
    </main>
  )
}

export default About

export const Head = () => <title>About</title>
