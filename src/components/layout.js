import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/index.scss"
import Styles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <Header />
        {props.children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
