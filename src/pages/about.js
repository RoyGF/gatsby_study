import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <p>This is my biography</p>
      <p>
        <Link to="/contact">Contact</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
