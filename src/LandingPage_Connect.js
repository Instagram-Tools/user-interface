import React, { Component } from 'react';

export default class LandingPage_Connect extends Component {
  render() {
    return (
      <div className="connect_insta_account landing_page_connect">
        <h1 className="settingtitle">Connect your Instagram account</h1>
        <a href="#" className="title_menu_element privacy">
          Your details will not be transferred to third parties, and neither
          your email, nor your password will be saved. Click to see our privacy
          policy.
        </a>
        <div className="w-form">
          <form
            id="email-form-2"
            name="email-form-2"
            data-name="Email Form 2"
            className="formholder_connect_account"
          >
            <div className="columnholder filterholder first connect_account_column">
              <input
                type="text"
                maxLength="256"
                name="field-3"
                data-name="Field 3"
                id="field-3"
                className="text-field filter connect_account_filter w-input"
              />
              <input
                type="text"
                maxLength="256"
                name="field-3"
                data-name="Field 3"
                id="field-3"
                className="text-field filter connect_account_filter w-input"
              />
              <div className="columnholder belowholder connect_account_second_column">
                <div className="text_field_description below connect_account_text">
                  Email
                </div>
                <div className="text_field_description below connect_account_text">
                  Password
                </div>
              </div>
            </div>
            <input
              type="submit"
              value="Connect"
              data-wait="Please wait..."
              className="submitbutton connect_account_button w-button"
            />
          </form>
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
