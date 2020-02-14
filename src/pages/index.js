import React from "react"

import "../assets/scss/style.scss"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import * as astronaut from "../assets/images/gatsby-astronaut.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <h1>Series TV</h1>
    <section>
      <div>
        <Image img="https://www.marinerocomunicacion.com/wp-content/uploads/2019/10/cut-horizontal-ADIOS_POSTER_4X2_LOW.jpg" />
      </div>
      <div>
        <Image img="https://3.bp.blogspot.com/-s3c7_9Dwk5g/TYcBz5kKuUI/AAAAAAAAN1s/LGzXdWI7hTc/s1600/thor-2011-carteles-2.jpg" />
      </div>
      <div>
        <Image img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/poster-joker-2-1567010576.jpg?crop=1.00xw:0.349xh;0,0.137xh&resize=480:*" />
      </div>
      <div>
        <Image img="https://valenciaplaza.com/public/Image/2016/12/culturplaza_66_01_NoticiaAmpliada.jpg"/>
      </div>
    </section>
  </Layout>
)

export default IndexPage
