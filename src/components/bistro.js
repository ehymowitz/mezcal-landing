import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

export default function Bistro() {
  return(
    <StaticQuery
      query ={graphql`
        query bistroQuery {
          bistro: file(relativePath: {eq: "desktop/Coming-soon.png"}) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <div className="link bistro">
          <Img fluid={data.bistro.childImageSharp.fluid} />
        </div>
      )}
    />
  )
}
