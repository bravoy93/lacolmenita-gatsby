import React from "react"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/seo"
import { useStaticQuery, graphql } from "gatsby"

export default function Noticias() {
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
    <Layout pageSelected="/noticias">
      <SEO title="Noticias"
      pathname="/noticias"
      image={site.siteImage}/>
      <div>
        <h1>Noticias</h1>
      </div>
      
    </Layout>
  )
}