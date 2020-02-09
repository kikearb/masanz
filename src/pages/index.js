import React from "react"
import { Link } from "gatsby"

import "../assets/scss/style.scss"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import * as astronaut from "../assets/images/gatsby-astronaut.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div>
      <Image img={astronaut} alt="Astronauta gatsby" />
    </div>
  </Layout>
)

export default IndexPage
