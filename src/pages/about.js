import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About me</h1>
      <p>This is my biography</p>
      <p><Link to="/contact">Contact</Link></p>
    </div>
  )
}

export default AboutPage
