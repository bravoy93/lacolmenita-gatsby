import React from "react"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/seo"
import { useStaticQuery, graphql } from "gatsby"

export default function Home({location}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteImage
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Home"
      pathname="/"
      image={site.siteImage}/>      
    </Layout>
  )
}
