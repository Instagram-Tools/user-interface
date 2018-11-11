import React, { Component } from 'react';
import TextField from './TextField';
import TextField_Confirm from './TextField_Confirm';

export default class LandingPage_Register extends Component {
  state = {
    isEmailSet: false,
    isPasswordSet: false,
    isConfirmed: false
  };

  render() {
    return (
      <div
        style={this.props.display ? { opacity: 1, display: 'unset' } : {}}
        className="connect_insta_account landing_page_connect"
      >
        <h1 className="settingtitle">Register</h1>
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
              <TextField
                type="email"
                placeholder="Email"
                value="email"
                setIsSet={b => this.setState({ isEmailSet: b })}
              />
              <TextField
                type="password"
                placeholder="Password"
                value="e_password"
                setIsSet={b => this.setState({ isPasswordSet: b })}
              />
              <TextField_Confirm
                type="password"
                placeholder="Confirm Password"
                value="e_password"
                setIsConfirmed={this.setIsConfirmed.bind(this)}
              />
            </div>
            <input
              onClick={this.requirementsMet() ? this.props.toggle : null}
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

  requirementsMet() {
    return (
      this.state.isEmailSet &&
      this.state.isPasswordSet &&
      this.state.isConfirmed
    );
  }

  setIsConfirmed(isConfirmed = false) {
    this.setState({ isConfirmed });
  }
}
