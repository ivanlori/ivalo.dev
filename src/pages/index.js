import React from "react"
import { Link } from "gatsby"
import FirstSection from "../components/FirstSection"
import SecondSection from "../components/SecondSection"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome!" />
    <FirstSection />
    <SecondSection />
  </Layout>
)

export default IndexPage
