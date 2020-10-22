import React from "react"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/seo"
import { useStaticQuery, graphql } from "gatsby"

export default function Blog() {
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
    <Layout pageSelected="/blog">
      <SEO title="Blog"
      pathname="/blog"
      image={site.siteImage}/>
      <div>
        <h1>Blog</h1>
      </div>
      
    </Layout>
  )
}