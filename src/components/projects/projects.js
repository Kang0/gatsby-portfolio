import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { HELMET_PROPS } from 'react-helmet/lib/HelmetConstants';

const Projects = () => {
    const data = useStaticQuery(graphql`
    query {
        hundreddays: file(relativePath: { eq: "hundred-days.png"}) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        records: file(relativePath: { eq: "asana-example.png"}) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)

    return (
        <div>
            <h1>Projects</h1>
            <Img fluid={data.hundreddays.childImageSharp.fluid} />
            <Img fluid={data.records.childImageSharp.fluid} />
        </div>)
}

export default Projects