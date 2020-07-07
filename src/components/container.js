import React from "react"
import Helmet from "react-helmet"

export default function Container({ children }) {
  return (
    <div className="container">
      <Helmet defer={false} >
        <title>Mezcal</title>
        <meta name="description" content= "NEED DESCRIPTION"/>
      </Helmet>
      {children}
    </div>
  )
}
