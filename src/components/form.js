import React from "react"

export default function FormPage() {

  return (
    <div className="form-container">
      <h1>Reservation</h1>
      <form action="https://getform.io/f/a91d2b1a-de73-4077-bab3-484d98c5a324" method="POST">
        <div className="column left">
          <label htmlFor="name">
            <input name="name" type="text" placeholder="Name (nom)"/>
          </label>
          <label htmlFor="numberOfPeople">
            <input name="numberOfPeople" type="text" placeholder="Number of people (personnes)" />
          </label>
          <label htmlFor="telephone">
            <input name="telephone" type="text" placeholder="Telephone" />
          </label>
        </div>
        <div className="column">
          <div className="date-time">
            <label className="date" htmlFor="date">
              <input name="date" type="text" placeholder="Date" />
            </label>
            <label htmlFor="time">
              <input name="time" type="text" placeholder="Time (Heure)"/>
            </label>
          </div>
          <label htmlFor="text">
            <input name="email" type="text" placeholder="Email (courierélectronique)" />
          </label>
          <div className="submit-holder">
            <button type="submit"><h2>Submit</h2></button>
          </div>
        </div>
      </form>
    </div>
  )
}
