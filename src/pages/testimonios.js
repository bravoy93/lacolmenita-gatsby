import React from "react"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/seo"
import { useStaticQuery, graphql } from "gatsby"

export default function Testimonios() {
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
    <Layout pageSelected="/testimonios">
      <SEO title="Testimonios"
      pathname="/testimonios"
      image={site.siteImage}/>
      <div>
        <h1>Testimonios</h1>
      </div>
      
    </Layout>
  )
}