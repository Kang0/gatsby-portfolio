import React from "react"
import Nav from '../components/nav/nav'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from '../components/projects/projects.js'
import PortfolioHeader from "../components/portfolio-header/portfolio-header"
import Multiple from '../components/portfolio-header/multiple'
import About from '../components/about/about'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Multiple />
    <Projects />
    <About />
  </Layout>
)

export default IndexPage
