import React, { Component } from 'react';
import TextField from './TextField';
import API from './API_Gateway';
import console from './Log';
import { Context } from './Context';
import { NavHashLink } from 'react-router-hash-link';

export default class LandingPageConnect extends Component {
  state = {
    isEmailSet: false,
    isPasswordSet: false,
    error: false
  };

  render() {
    return (
      <Context.Consumer>
        {context => {
          return (
            <div
              style={
                this.props.display
                  ? { opacity: 1, display: 'flex' }
                  : { display: 'none' }
              }
              className="connect_insta_account"
            >
              <h1 className="logintitle">Connect your Instagram account</h1>
              <NavHashLink
                to="/leagal/#privacy"
                className="loginsubtitle clickprivacy"
              >
                Your details will not be transferred to third parties. Your
                password is encrypted. Click to see our privacy policy.
              </NavHashLink>
              <div className="w-form">
                <div className="formholder_connect_account">
                  <div className="columnholder filterholder first connect_account_column">
                    <TextField
                      inputClass="text-field-2 filter connect_account_filter w-input"
                      className="text_field_description-2 below connect_account_text"
                      type="email"
                      placeholder="Instagram Username"
                      value="username"
                      setIsSet={b => this.setState({ isEmailSet: b })}
                    />
                    <TextField
                      inputClass="text-field-2 filter connect_account_filter w-input"
                      className="text_field_description-2 below connect_account_text"
                      type="password"
                      placeholder="Instagram Password"
                      value="password"
                      setIsSet={b => this.setState({ isPasswordSet: b })}
                    />
                  </div>
                  <input
                    onClick={() => this.submit(context)}
                    type="button"
                    value="Connect"
                    data-wait="Please wait..."
                    className="loginbutton w-button"
                  />
                </div>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div
                  style={this.state.error ? { display: 'block' } : {}}
                  className="error-message-3 w-form-fail"
                >
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }

  submit(context) {
    return this.requirementsMet() && this.save(context)
      ? this.props.toggle
      : null;
  }

  requirementsMet() {
    return this.state.isEmailSet && this.state.isPasswordSet;
  }

  async save(context) {
    let data = API.data_to_save({ ...context.state });

    if (data) {
      try {
        await API.put(data);
        this.setState({ error: false });
        return true;
      } catch (e) {
        console.error('LandingPageConnect save():', e);
        this.setState({ error: true });
        return false;
      }
    }
  }
}
