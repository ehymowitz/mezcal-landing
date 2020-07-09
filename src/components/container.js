import React from "react"
import Helmet from "react-helmet"

export default function Container({ children }) {
  return (
    <div className="container">
      <Helmet defer={false} >
        <title>Mezcal</title>
        <meta name="Mezcal" content= "Cafe Mezcal: Best Mexican food in Montreal: 156, rue Prince Arthur E"/>
      </Helmet>
      {children}
    </div>
  )
}
