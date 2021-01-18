import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const HikingListPage = () => (
  <Layout>
    <SEO title="Hiking List Page" />
    <h1>hiking</h1>
    <p>This is where I post about hikes.</p>
    <p>I haven't done that yet though.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/posts/">Check out my sweet blog</Link> <br />
  </Layout>
)

export default HikingListPage
