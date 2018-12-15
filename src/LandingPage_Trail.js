import React, { Component } from 'react';

export default class LandingPage_Trail extends Component {
  render() {
    return (
      <div className="connect_insta_account landing_page_trial">
        <h1 className="settingtitle">Test Pink Parrot for free for 7 days</h1>
        <div className="title_menu_element trialtext">
          This is our exclusive launch offer, expiring on November 1:<br />You
          get to test the full Pink Parrot software suit for free.<br />And
          don&#x27;t even have to enter your payment details.
        </div>
        <div className="w-form">
          <input
            type="submit"
            value="Start trial"
            data-wait="Please wait..."
            className="submitbutton connect_account_button trialbutton w-button"
          />
          <input
            type="submit"
            value="purchase subscription"
            data-wait="Please wait..."
            className="submitbutton connect_account_button buy_anyway_button w-button"
          />
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    );
  }
}
