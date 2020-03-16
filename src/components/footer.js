import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Styles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  const author = data.site.siteMetadata.author

  return (
    <footer className={Styles.footer}>
      <p>Created by {author} © 2020</p>
    </footer>
  )
}

export default Footer
