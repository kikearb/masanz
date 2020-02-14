import React from "react"

import "../assets/scss/style.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Contenido de la página</p>
  </Layout>
)

export default IndexPage
