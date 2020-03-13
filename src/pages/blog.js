import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            },
            excerpt
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
          return (
            <li>
              <h1>{edge.node.frontmatter.title}</h1>
              <p>{edge.node.excerpt}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
