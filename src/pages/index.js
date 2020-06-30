import React from "react"
import Bistro from '../components/bistro'
import Cafe from '../components/cafe'
import Form from '../components/form'


export default function Home() {
  return (
    <div className="Container">
      <div className="Top">
        <Bistro/>
        <Cafe/>
      </div>
      <div className="Form">
        <Form/>
      </div>
    </div>

  )
}
