import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <section>
      <h1></h1>
      <p className="base-font"></p>
    </section>

    <section> 
      <Link to="/posts">  
        <h2 className="base-font">100 Days of Code blog</h2>  
        <p className="base-font">Insert content here</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
     </Link>
    </section>
    
    <section> 
      <Link to="/hiking/">
        <h2 className="base-font">Hiking blog</h2> 
        <p className="base-font">Insert content here</p> 
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </Link> 
    </section>

  </Layout>
)

export default IndexPage