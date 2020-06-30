import React from "react"

export default function Form() {
  return (
    <div className="form-container">
      <h1>Reservation</h1>
      <form className="form">
        <label>
          <input type="text" placeholder="Name(nom)" />
        </label>
        <label>
          <input type="text" placeholder="Date" />
        </label>
        <label>
          <input type="text" placeholder="Time(Heure)" />
        </label>
        <label>
          <input type="text" placeholder="Number of people (personnes)" />
        </label>
        <label>
          <input type="text" placeholder="Date" />
        </label>
        <label>
          <input type="text" placeholder="Email(courierélectronique)" />
        </label>
        <label>
          <input type="text" placeholder="Telephone" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
