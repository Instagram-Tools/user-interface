import React, { Component } from 'react';
import TextField from './TextField';

export default class LandingPage_Connect extends Component {
  render() {
    return (
      <div
        style={this.props.display}
        className="connect_insta_account landing_page_connect"
      >
        <h1 className="settingtitle">Connect your Instagram account</h1>
        <a href="/privacy-policy" className="title_menu_element privacy">
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
              <TextField type="email" placeholder="Email" value="email" />
              <TextField
                type="password"
                placeholder="Password"
                value="e_password"
              />
              <TextField
                type="email"
                placeholder="Instagram Username"
                value="username"
              />
              <TextField
                type="password"
                placeholder="Instagram Password"
                value="password"
              />
            </div>
            <input
              onClick={this.props.toggle}
              type="button"
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
