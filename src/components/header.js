import React from "react"
import { Link } from "gatsby"

// import './header.module.scss'
import Styles from "./header.module.scss"

const Header = () => {
  return (
    <header className={Styles.header}>
      <h1>
        <Link className={Styles.title} to="/">
          Rodrigo Guzmán
        </Link>
      </h1>
      <nav>
        <ul className={Styles.navList}>
          <li>
            <Link
              className={Styles.navItem}
              activeClassName={Styles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={Styles.navItem}
              activeClassName={Styles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={Styles.navItem}
              activeClassName={Styles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={Styles.navItem}
              activeClassName={Styles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
