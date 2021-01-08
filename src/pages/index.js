import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>welcome</h1>
    <p>Sarah is learning to code.</p>
    <p>Sometimes she goes hiking, too.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/posts/">Check out my sweet blog</Link> <br />
  </Layout>
)

export default IndexPage
