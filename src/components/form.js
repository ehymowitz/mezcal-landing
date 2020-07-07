import React from "react"

export default function Form() {
  return (
    <div className="form-container">
      <h1>Reservation</h1>
      <form>
        <div className="column left">
          <label htmlFor="name">
            <input type="text" placeholder="Name (nom)"/>
          </label>
          <label htmlFor="numberOfPeople">
            <input type="text" placeholder="Number of people (personnes)" />
          </label>
          <label htmlFor="telephone">
            <input type="text" placeholder="Telephone" />
          </label>
        </div>
        <div className="column">
          <div className="date-time">
            <label className="date" htmlFor="date">
              <input type="text" placeholder="Date" />
            </label>
            <label htmlFor="time">
              <input type="text" placeholder="Time (Heure)"/>
            </label>
          </div>
          <label htmlFor="text">
            <input type="text" placeholder="Email (courierélectronique)" />
          </label>
          <div className="submit-holder">
            <button type="submit"><h2>Submit</h2></button>
          </div>
        </div>
      </form>
    </div>
  )
}
