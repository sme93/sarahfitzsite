import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HikeImage from "../components/hikeImage"
import SEO from "../components/seo"

const HikingListPage = () => (
  <Layout>
    <SEO title="Hiking List Page" />
    <h1>hiking</h1>
    <div className="intro-box">
      <p className="intro-p">Hiking in Rocky Mountain National Park and the surrounding areas.</p>
    </div>  
    <div>
      <HikeImage />
    </div>
    <div className="intro-box">
      <Link to="/skypond/">Click here for  the hike to Sky Pond - January 2021</Link> <br />
      <Link to="/frozenlake/">Click here for the hike to Frozen Lake - October 2020</Link> <br />
    </div>
  </Layout>
)

export default HikingListPage
