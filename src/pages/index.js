import React from "react"
import Bistro from '../components/bistro'
import Cafe from '../components/cafe'
import Form from '../components/form'
import { FaHeart } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container">
      <div className="logo-container">
        <div className="logo"></div>
      </div>
      <div className="top">
        <Bistro />
        <Cafe />
      </div>
      <div>
        <Form/>
      </div>
      <div className="footer-graphic">
        <p>© 2020 Mezcal, Inc. Made with <FaHeart/> in MTL.</p>
        <div className="graphic"></div>
      </div>
    </div>
  )
}
