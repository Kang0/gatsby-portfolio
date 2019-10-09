import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import './about.css'

import BackgroundImage from 'gatsby-background-image'

const About = ({ className }) => {
    const {
        snowboard,
    } = useStaticQuery(
        graphql`
        query {
          snowboard: file(relativePath: { eq: "snowboard.jpg" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `
    )

    const backgroundFluidImageStack = [
        snowboard.childImageSharp.fluid,
        `linear-gradient(to bottom, rgba(10,10,10,1) 10%, rgba(10,10,10,.8) 90%, rgba(10,10,10,1) 100%)`,
    ].reverse()

    return (
        <BackgroundImage
            Tag={`section`}
            id={`test`}
            fluid={backgroundFluidImageStack}
            className={className}
        >
            <StyledInnerWrapper>
                <div className="header__info">

                </div>
            </StyledInnerWrapper>
        </BackgroundImage>
    )
}

const StyledInnerWrapper = styled.div`
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AboutBackground = styled(About)`
  width: 100%;
  min-height: 30vw;
  /* You should set a background-size as the default value is "cover"! */
  background-size: cover;
  /* So we won't have the default "lightgray" background-color. */
  background-color: transparent;
  /* Now again, remember the stacking order of CSS: lowermost comes last! */
  background-repeat: no-repeat;
  background-position: center 155%, center, center;
  color: #fff;
`

export default AboutBackground