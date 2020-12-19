import React from "react"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Hero from "../Components/HeroSection/Hero"
import QuienesSomos from "../Components/QuienesSomos/QuienesSomos"

const useStyles = makeStyles({
  heroSection: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default function Home() {
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

  const image = {
    src:site.siteMetadata.siteImage.src,
    width: parseInt(site.siteMetadata.siteImage.width),
    height: parseInt(site.siteMetadata.siteImage.height),
  }
  const classes = useStyles();

  return (
    <Layout pageSelected="/">
      <SEO title="Home"
      pathname="/"
      image={image}/>
      <Hero />
      <QuienesSomos />
    </Layout>
  )
}
