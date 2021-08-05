import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CrystalLakesPage = () => (
  <Layout>
    <SEO title="Crystal Lakes" />
    <h1>Hiking to Crystal Lakes</h1>
    <h2>14.5 miles/3,097 ft elevation gain</h2>
    <Link to="/hiking/">Go back to the hiking page</Link>
  </Layout>
)

export default CrystalLakesPage
