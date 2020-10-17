import React from "react"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/seo"

const homeImage = {
  src: "https://lacolmenita.imgix.net/hLzTJQz.png",
  width: '512px',
  height: '512px'
}

export default function Home({location}) {
  return (
    <Layout>
      <SEO title="Home"
      pathname="/"
      image={homeImage}/>
      
    </Layout>
  )
}
