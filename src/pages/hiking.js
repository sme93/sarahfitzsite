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
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/skypond/">Click here for  the hike to Sky Pond - January 2021</Link> <br />
    <Link to="/frozenlake/">Click here for the hike to Frozen Lake - October 2020</Link> <br />
  </Layout>
)

export default HikingListPage
