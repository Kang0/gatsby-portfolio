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
                <p className="about__text">
                    Greater Boston Area Web Developer.<br /><br />
                    Graduate of Boston College '14 in Political Science and Communication.<br /><br />
                    Originally on track to attend law school and worked at an immigration law firm for 3 years.<br /><br />
                    Pivoted to pursue a new career path after my father sent me the book "The Fourth Industrial Revolution" by Klaus Schwab.<br /><br />
                    Graduate of Flatiron School Web Development Program, immersed in Ruby on Rails, HTML, Javascript, CSS, and React.<br /><br />
                    Avid rock climber and snowboarder.
                </p>
            </div>
        </div>

    )
}

export default AboutInfo