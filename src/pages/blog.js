import React from "react"

import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import "katex/dist/katex.min.css"
import Styles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>My Blog</h1>
      <ol className={Styles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          const slug = edge.node.fields.slug
          const route = `/blog/${slug}`
          return (
            <li className={Styles.post}>
              <Link to={route}>
                <h1>{edge.node.frontmatter.title}</h1>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
