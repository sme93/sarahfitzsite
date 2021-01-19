import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PostsPage = ({ data }) => {
  console.log(data);
  const { edges } = data.allMdx

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>#100DaysofCode Blog</h1>
      <ul
        className="post-unordered-list">
        {edges.map(item => (
          <li className="post-links"><Link to={`/${item.node.slug}`}>{item.node.frontmatter.title}</Link> </li>
        ))}
      </ul>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ContentIndex {
    allMdx(
      filter: {
        fileAbsolutePath: {glob: "**/posts/**"}
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          slug
        }
      }
    }
  }
`

export default PostsPage
