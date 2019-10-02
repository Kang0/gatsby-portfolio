import React from "react"
import Nav from '../components/nav/nav'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioHeader from "../components/portfolio-header/portfolio-header"
import Multiple from '../components/portfolio-header/multiple'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Multiple />
  </Layout>
)

export default IndexPage
