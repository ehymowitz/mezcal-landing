import React from "react"
import Bistro from "../components/bistro"
import Cafe from "../components/cafe"
import FormPage from "../components/form"
import { FaHeart } from "react-icons/fa"
import Container from "../components/container"

export default function Home() {
  return (
    <Container>
      <div className="content-container">
        <div className="logo-container">
          <div className="logo"></div>
        </div>
        <div className="top">
          <Bistro />
          <Cafe />
        </div>
        <div className="form">
          <FormPage/>
        </div>
      </div>
      <div className="footer-graphic">
        <p>© 2020 Mezcal, Inc. Made with <FaHeart/> in MTL.</p>
        <div className="graphic"></div>
      </div>
    </Container>
  )
}
