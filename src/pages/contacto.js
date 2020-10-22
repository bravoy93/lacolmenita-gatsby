import React from "react"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/seo"
import { useStaticQuery, graphql } from "gatsby"

export default function Contacto() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteImage {
              src,
              width,
              height
            }
          }
        }
      }
    `
  )

  return (
    <Layout pageSelected="/contacto">
      <SEO title="Contacto"
      pathname="/contacto"
      image={site.siteImage}/>
      <div>
        <h1>Contacto</h1>
      </div>
      
    </Layout>
  )
}