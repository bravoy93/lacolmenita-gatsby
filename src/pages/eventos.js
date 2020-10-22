import React from "react"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/seo"
import { useStaticQuery, graphql } from "gatsby"

export default function Eventos() {
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
    <Layout pageSelected="/eventos">
      <SEO title="Eventos"
      pathname="/eventos"
      image={site.siteImage}/>
      <div>
        <h1>Eventos</h1>
      </div>
      
    </Layout>
  )
}