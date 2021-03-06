import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

export default function Cafe() {
  return(
    <StaticQuery
      query ={graphql`
        query CafeQuery {
          cafe: file(relativePath: {eq: "desktop/cafe_mezcal.png"}) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <div className="link cafe">
          <a href="http://cafemezcal.ca/">
            <Img fluid={data.cafe.childImageSharp.fluid} />
          </a>
        </div>
      )}
    />
  )
}
