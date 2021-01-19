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

    <section>
      <Link to="/posts">
        <h2 className="base-font">Click here for Coding</h2>
        <p className="base-font">Blog posts updating my progress with #100DaysofCode</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <CodeImage />
        </div>
     </Link>
    </section>

    <section>
      <Link to="/hiking/">
        <h2 className="base-font">Click here for Hiking</h2>
        <p className="base-font">Coming soon</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </Link>
    </section>

  </Layout>
)

export default IndexPage
