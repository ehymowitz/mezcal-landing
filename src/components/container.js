import React from "react"
import Helmet from "react-helmet"

export default function Container({ children }) {
  return (
    <div className="container">
      <Helmet defer={false} >
        <title>Mezcal</title>
        <meta name="Mezcal Montreal" content= "Fresh Fish Tacos, Guacamole, Ceviche and Shrimp Cocktail. Also your regular homemade Mexican soup, burritos, nachos. Amazing Drinks!"/>
        <meta property="og:description" content="Fresh Fish Tacos, Guacamole, Ceviche and Shrimp Cocktail. Also your regular homemade Mexican soup, burritos, nachos. Amazing Drinks!" />
        <meta property="og:image" content='/preview.png' />
        <meta property="og:url" content='https://mezcalmtl.ca/'/>
        <meta property="og:type" content='website'/>
      </Helmet>
      {children}
    </div>
  )
}
