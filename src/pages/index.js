import React from "react"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/seo"
import Medicare from "../Components/Medicare/medicare"

const homeImage = {
  src: "https://cfd-web.s3.us-east-2.amazonaws.com/images/blue%2Bbox%2Bfull.svg",
  width: '500px',
  height: '500px'
}

export default function Home({location}) {
  return (
    <Layout>
      <SEO title="Medicare Coverage Plans"
      pathname="/"
      image={homeImage} />
      <Medicare />
    </Layout>
  )
}
