import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import CodeImage from "../components/codeImage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section>
      <h1>Front-End Engineering Student</h1>
      <p className="base-font">Currently enrolled at Turing School of Software and Design. Supplementing my learning with Codecademy tutorials on HTML, CSS, and Javascript.
      Working on the #100DaysofCode challenge to stay motivated.</p>
    </section>

    <div className="homepage-container">

      <section className="card">
        <Link to="/posts">
          <div className="card-header">
            <h2 className="heading-font card-font">Click here for Coding</h2>
            <p className="base-font card-font">#100DaysofCode blog</p>
          </div>
          <div className="card-image">
            <CodeImage />
          </div>
        </Link>
      </section>

      <section className="card">
        <Link to="/hiking/">
          <div className="card-header">
            <h2 className="heading-font card-font">Click here for Hiking</h2>
            <p className="base-font card-font">Photos and Reviews of Hiking Adventures</p>
          </div>
          <div className="card-image">
            <Image />
          </div>
        </Link>
      </section>

    </div>

  </Layout>
)

export default IndexPage
