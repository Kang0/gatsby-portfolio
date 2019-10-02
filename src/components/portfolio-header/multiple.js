import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import './portfolio-header.css'

import BackgroundImage from 'gatsby-background-image'

const MultiBackground = ({ className }) => {
  const {
    portfolioHeader,
  } = useStaticQuery(
    graphql`
    query {
      portfolioHeader: file(relativePath: { eq: "portfolio-header.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
  )

  // Watch out for CSS's stacking order, especially when styling the individual
  // positions! The lowermost image comes last!
  const backgroundFluidImageStack = [
    portfolioHeader.childImageSharp.fluid,
    `linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.6) 60%, rgba(10,10,10,0.94) 94%, rgba(10,10,10,1) 100%)`,
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
          <h1 className="header__title">Hi, I'm Kevin Kang</h1>
          <p className="header__subtitle">Web Developer</p>
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

const StyledMultiBackground = styled(MultiBackground)`
  width: 100%;
  min-height: 20vw;
  /* You should set a background-size as the default value is "cover"! */
  background-size: cover;
  /* So we won't have the default "lightgray" background-color. */
  background-color: transparent;
  /* Now again, remember the stacking order of CSS: lowermost comes last! */
  background-repeat: no-repeat;
  background-position: center 155%, center, center;
  color: #fff;
`

export default StyledMultiBackground