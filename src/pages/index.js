import React, { createContext } from "react"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Hero from "../Components/HeroSection/Hero"
import QuienesSomos from "../Components/QuienesSomos/QuienesSomos"
import NuestrasObras from "../NuestrasObras/NuestrasObras"
import NuestrosSuennos from "../Components/NuestrosSuennos/NuestrosSuennos"

export const HomeContext = createContext()

const useStyles = makeStyles({
  heroSection: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default function Home() {
  const {
    site,
    heroImage,
    abracadabra,
    cenicienta,
    ricitos,
    ...footerSponsors
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteImage {
              src
              width
              height
            }
          }
        }
        heroImage: file(relativePath: { eq: "heroBg.webp" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        abracadabra: file(
          relativePath: { eq: "obras/abracadabra/portada.webp" }
        ) {
          childImageSharp {
            fluid(maxHeight: 500, quality: 0) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cenicienta: file(
          relativePath: { eq: "obras/cenicienta-segun-los-beatles/portada.webp" }
        ) {
          childImageSharp {
            fluid(maxHeight: 500, quality: 0) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ricitos: file(
          relativePath: { eq: "obras/ricitos-valdes-y-los-tres-ositos/portada.webp" }
        ) {
          childImageSharp {
            fluid(maxHeight: 500, quality: 0) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cnae: file(
          relativePath: { eq: "sponsors/logo-artes-escenicas-yellow.png" }
        ) {
          childImageSharp {
            fixed(height: 45, quality: 0) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        cnae_xs: file(
          relativePath: { eq: "sponsors/logo-artes-escenicas-yellow.png" }
        ) {
          childImageSharp {
            fixed(height: 45, quality: 0) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        centroTeatro: file(
          relativePath: { eq: "sponsors/logo-centro-de-teatro-yellow.png" }
        ) {
          childImageSharp {
            fixed(height: 45, quality: 0) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        centroTeatro_xs: file(
          relativePath: { eq: "sponsors/logo-centro-de-teatro-yellow.png" }
        ) {
          childImageSharp {
            fixed(height: 38, quality: 0) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        excelencias: file(
          relativePath: { eq: "sponsors/logo-excelencias-yellow.png" }
        ) {
          childImageSharp {
            fixed(height: 45, quality: 0) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        excelencias_xs: file(
          relativePath: { eq: "sponsors/logo-excelencias-yellow.png" }
        ) {
          childImageSharp {
            fixed(height: 38, quality: 0) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        mincult: file(
          relativePath: { eq: "sponsors/logo-mincult-yellow.png" }
        ) {
          childImageSharp {
            fixed(height: 45, quality: 0) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        mincult_xs: file(
          relativePath: { eq: "sponsors/logo-mincult-yellow.png" }
        ) {
          childImageSharp {
            fixed(height: 38, quality: 0) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        unicef: file(relativePath: { eq: "sponsors/logo-unicef-yellow.png" }) {
          childImageSharp {
            fixed(height: 45, quality: 0) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        unicef_xs: file(relativePath: { eq: "sponsors/logo-unicef-yellow.png" }) {
          childImageSharp {
            fixed(height: 38, quality: 0) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const image = {
    src: site.siteMetadata.siteImage.src,
    width: parseInt(site.siteMetadata.siteImage.width),
    height: parseInt(site.siteMetadata.siteImage.height),
  }

  const obrasImages = {abracadabra, cenicienta, ricitos}

  const classes = useStyles()

  return (
    <HomeContext.Provider value={{footerSponsors, obrasImages}}>
      <Layout pageSelected="/">
        <SEO title="Home" pathname="/" image={image} />
        <Hero ImageFile={heroImage} />
        <QuienesSomos />
        <NuestrosSuennos />
        <NuestrasObras />
      </Layout>
    </HomeContext.Provider>
  )
}
