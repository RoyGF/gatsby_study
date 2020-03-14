import React from "react"

import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import "katex/dist/katex.min.css"

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
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {

          const slug = edge.node.fields.slug
          const route = `/blog/${slug}`
          return (
            <li>
              <h1><Link to={route}>{edge.node.frontmatter.title}</Link></h1>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
