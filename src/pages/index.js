import React from "react"
import Bistro from '../components/bistro'
import Cafe from '../components/cafe'
import Form from '../components/form'

export default function Home() {
  return (
    <div className="container">
      <div className="top">
        <Bistro />
        <Cafe />
      </div>
      <div className="form">
        <Form/>
      </div>
    </div>
  )
}
