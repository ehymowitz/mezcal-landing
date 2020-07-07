import React from "react"
import { Form, Text } from 'informed'
import { useEffect } from 'react'


export default function FormPage() {

  // useEffect(() => {
  //   handleClientLoad()
  // });

  // const handleClientLoad = () => {
  //   window.gapi.load('client:auth2', initClient())
  // }

  // const initClient = () => {
  //   window.gapi.client.init({
  //     'apiKey': API_KEY,
  //     'clientId': CLIENT_ID,
  //     'scope': SCOPE,
  //     'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  //   }).then(()=> {
  //     window.gapi.auth2.getAuthInstance().isSignedIn.listen();
  //   });
  // }

  const handleSubmit = (values) => {
    console.log(values)

    // const params = {
    //   spreadsheetId: SPREADSHEET_ID,
    //   range: 'Sheet1',
    //   valueInputOption: 'RAW',
    //   insertDataOption: 'INSERT_ROWS'
    // };

    // const valueRangeBody = {
    //   'majorDimension': 'ROWS',
    //   'values': [values]
    // };

    // let request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
    // request.then(function (response) {
    //   console.log(response.result);
    // }, function (reason) {
    //   console.error('error: ' + reason.result.error.message);
    // });
  }


  return (
    <div className="form-container">
      <h1>Reservation</h1>
      <Form onSubmit = {handleSubmit} >
        <div className="column left">
          <label htmlFor="name">
            <Text field="name" type="text" placeholder="Name (nom)"/>
          </label>
          <label htmlFor="numberOfPeople">
            <Text field="numberOfPeople" type="text" placeholder="Number of people (personnes)" />
          </label>
          <label htmlFor="telephone">
            <Text field="telphone" type="text" placeholder="Telephone" />
          </label>
        </div>
        <div className="column">
          <div className="date-time">
            <label className="date" htmlFor="date">
              <Text field="date" type="text" placeholder="Date" />
            </label>
            <label htmlFor="time">
              <Text field="time" type="text" placeholder="Time (Heure)"/>
            </label>
          </div>
          <label htmlFor="text">
            <Text field="email" type="text" placeholder="Email (courierélectronique)" />
          </label>
          <div className="submit-holder">
            <button type="submit"><h2>Submit</h2></button>
          </div>
        </div>
      </Form>
    </div>
  )
}
