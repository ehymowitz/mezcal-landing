import React from "react"
import TextField from '@material-ui/core/TextField';

export default function FormPage() {
  return (
    <div className="form-container">
      <h1>Reservation</h1>
      <form action="https://getform.io/f/f77652c8-7564-439a-a7ed-8c0746707621" method="POST">
        <div className="column left">
          <label htmlFor="name">
            <TextField id="standard-basic" name="name" type="text" variant="standard" label="Name (nom)"/>
          </label>
          <label htmlFor="numberOfPeople">
            <TextField id="standard-basic" name="numberOfPeople" type="text" variant="standard" label="Number of people (personnes)" />
          </label>
          <label htmlFor="telephone">
            <TextField id="standard-basic" name="telephone" type="text" variant="standard" label="Telephone" />
          </label>
        </div>
        <div className="column">
          <div className="date-time">
            <label className="date" htmlFor="date">
              <TextField id="standard-basic" name="date" type="text" variant="standard" label="Date" />
            </label>
            <label htmlFor="time">
              <TextField id="standard-basic" name="time" type="text" variant="standard" label="Time (Heure)"/>
            </label>
          </div>
          <label htmlFor="text">
            <TextField id="standard-basic" name="email" type="text" variant="standard" label="Email (courierélectronique)" />
          </label>
          <div className="submit-holder">
            <button type="submit"><h2>Submit</h2></button>
          </div>
        </div>
      </form>
    </div>
  )
}
