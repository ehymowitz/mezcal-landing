import React from "react"
import Bistro from '../components/bistro'
import Cafe from '../components/cafe'
import Form from '../components/form'

export default function Home() {
  return (
    <div className="container">
      <div className="logo" >
      <p>Notes: Need favicon, meta data, colors, font choices. Also images are different sizes, may cause problems with responsiveness</p>
        <img src="/desktop/Mezcal_logo.png" alt="logo"/>
        <p>^ change to text for scalability?</p>
      </div>
      <div className="top">
        <Bistro />
        <Cafe />
      </div>
      <div className="form">
        <Form/>
      </div>
      <div className="footer">
        <p>© 2020 Mezcal,Inc. Made with love in MTL. (I can change "love" to a heart if we want)</p>
        <div className="graphic"></div>
      </div>
    </div>
  )
}
