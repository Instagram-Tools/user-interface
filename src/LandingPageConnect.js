import React, { Component } from 'react';
import TextField from './TextField';
import { Link } from 'react-router-dom';
import API from './API_Gateway';
import console from './Log';
import { Context } from './Context';

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
                  ? { opacity: 1, display: 'unset' }
                  : { display: 'none' }
              }
              className="connect_insta_account landing_page_payment connect"
            >
              <h1 className="settingtitle">Connect your Instagram account</h1>
              <Link to="/privacy-policy" className="title_menu_element privacy">
                Your details will not be transferred to third parties, and
                neither your email, nor your password will be saved. Click to
                see our privacy policy.
              </Link>
              <div className="w-form">
                <div className="formholder_connect_account">
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
                    onClick={() => this.submit(context)}
                    type="button"
                    value="Connect"
                    data-wait="Please wait..."
                    className="submitbutton connect_account_button w-button"
                  />
                </div>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div
                  style={this.state.error ? { display: 'block' } : {}}
                  className="w-form-fail"
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
    console.log('save()');

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
