import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
    <StaticQuery
        query={graphql`
      query {
        portfolioheader: file(relativePath: { eq: "portfolio-header.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
        render={data => {
            const imageData = data.portfolioheader.childImageSharp.fluid
            return (
                <BackgroundImage
                    Tag="section"
                    className={className}
                    fluid={imageData}
                >
                    <h1>Hi, I'm Kevin Kang</h1>
                    <h6>Web Developer</h6>
                </BackgroundImage>
            )
        }}
    />
)

const StyledBackgroundSection = styled(BackgroundSection)`
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 355px;
    width: 100vw;
    position: absolute;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    margin-top: 5vw;
    z-index:-1;
`

export default StyledBackgroundSection