import React, { Component } from 'react';
import TextField from './TextField';
import { Link } from 'react-router-dom';

export default class LandingPage_Connect extends Component {
  state = {
    isEmailSet: false,
    isPasswordSet: false
  };

  render() {
    return (
      <div
        style={
          this.props.display
            ? { opacity: 1, display: 'unset' }
            : { display: 'none' }
        }
        className="connect_insta_account landing_page_payment connect"
      >
        <h1 className="settingtitle">Connect your Instagram account</h1>
        <Link to="/privacy-policy" className="title_menu_element privacy">
          Your details will not be transferred to third parties, and neither
          your email, nor your password will be saved. Click to see our privacy
          policy.
        </Link>
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
                placeholder="Instagram Username"
                value="username"
                setIsSet={b => this.setState({ isEmailSet: b })}
              />
              <TextField
                type="password"
                placeholder="Instagram Password"
                value="password"
                setIsSet={b => this.setState({ isPasswordSet: b })}
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
    return this.state.isEmailSet && this.state.isPasswordSet;
  }
}
