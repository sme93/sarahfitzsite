import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const getNumber = (blogday) => {
  const postNumber =  blogday.replace("blogday", "");
  return parseInt(postNumber);
}

const PostsPage = ({ data }) => {
  const { edges } = data.allMdx
  edges.sort((a, b) => getNumber(b.node.slug) - getNumber(a.node.slug));

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>#100DaysofCode Blog</h1>
      <ul
        className="post-unordered-list">
        {edges.map(item => (
          <li key={item.node.id} className="post-links">
            <Link to={`/${item.node.slug}`}>{item.node.frontmatter.title}</Link> 
            <p>{item.node.excerpt}</p>
          </li>
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
          excerpt
        }
      }
    }
  }
`

export default PostsPage
