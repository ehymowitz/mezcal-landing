import React from "react"

export default function Form() {
  return (
    <div className="form-container">
      <h1>Reservation</h1>
      <form>
        <div className="column">
          <label>
            <input type="text" placeholder="Name (nom)" />
          </label>
          <label>
            <input type="text" placeholder="Number of people (personnes)" />
          </label>
          <label>
            <input type="text" placeholder="Telephone" />
          </label>
        </div>
        <div className="column">
          <div className="date-time">
            <label className="date">
              <input type="text" placeholder="Date" />
            </label>
            <label>
              <input type="text" placeholder="Time (Heure)"/>
            </label>
          </div>
          <label>
            <input type="text" placeholder="Email (courierélectronique)" />
          </label>
          <div className="submit-holder">
            <button type="submit"><p>Submit</p></button>
          </div>
        </div>
      </form>
    </div>
  )
}
