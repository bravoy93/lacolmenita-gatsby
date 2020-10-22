import React from "react"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  heroSection: {
    height: '200vh',
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

  const classes = useStyles();

  return (
    <Layout pageSelected="/">
      <SEO title="Home"
      pathname="/"
      image={site.siteImage}/>
      <div className={classes.heroSection}>
        <h1>Bienvenido</h1>
      </div>
      
    </Layout>
  )
}
