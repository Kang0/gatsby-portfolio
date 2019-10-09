import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import './projects.css'

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
            <h2 className="section__header">Projects</h2>
            <div className="card__container">
                <div className="card__image">
                    <Img fluid={data.hundreddays.childImageSharp.fluid} />
                </div>
                <p className="card__text-header">100 Days</p>
                <p className="card__text-body">
                    <a href="">Github</a><br />
                    <a href="">About</a><br />
                    <a href="">Live (Heroku)</a>
                </p>
            </div>
            <div className="card__container">
                <div className="card__image">
                    <Img fluid={data.records.childImageSharp.fluid} />
                </div>
                <p className="card__text-header">Record Your Records</p>
                <p className="card__text-body">
                    <a href="">Github</a><br />
                    <a href="">About</a><br />
                    <a href="">Live (Heroku)</a>
                </p>
            </div>
        </div>

    )
}

export default Projects