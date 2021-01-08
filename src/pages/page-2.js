import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>100 days of Code Blog</h1>
    <h2>Day 2 of 100 days of Code</h2>
    <p>I spent yesterday reviewing Javascript If Statements, and I learned about Ternary Operators
    and Switch Statements. I also bought and set up this domain using a Gatsby template.</p>
    <p>Today I worked on function review on codecademy. I learned about default parameters,
    return statements, function expressions and arrow functions.</p>
    <p>Currently reviewing some html stuff so I can write this blog post.</p>
    <p>I listened to a mix of Thee Oh Sees and Stephen Malkmus.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
