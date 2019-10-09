import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import './about.css'

const AboutInfo = () => {
    const data = useStaticQuery(graphql`
    query {
        profilepic: file(relativePath: { eq: "profilepic.jpg"}) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)

    return (
        <div>
            <div className="about__container">
                <Img className="about__image" fluid={data.profilepic.childImageSharp.fluid} />
            </div>
        </div>

    )
}

export default AboutInfo