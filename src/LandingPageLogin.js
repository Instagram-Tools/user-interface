import React, { Component } from 'react';
import TextField from './TextField';
import API from './API_Gateway';
import { Context } from './Context';
import { NavHashLink } from 'react-router-hash-link';
import console from './Log';

export default class LandingPageLogin extends Component {
  statusCode = {
    0: 'success',
    1: 'Some Error',
    2: 'Wrong Credentials'
  };

  state = {
    isEmailSet: false,
    isPasswordSet: false,
    status: this.statusCode[0]
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
              <h1 className="settingtitle">Login</h1>
              <NavHashLink
                smooth
                to="/legal/#privacy"
                className="title_menu_element privacy"
              >
                Your details will not be transferred to third parties, and
                neither your email, nor your password will be saved. Click to
                see our privacy policy.
              </NavHashLink>
              <div className="w-form">
                <div className="formholder_connect_account">
                  <div className="columnholder filterholder first connect_account_column">
                    <TextField
                      type="email"
                      placeholder="Email"
                      value="try_email"
                      setIsSet={b => this.setState({ isEmailSet: b })}
                    />
                    <TextField
                      type="password"
                      placeholder="Password"
                      value="try_e_password"
                      setIsSet={b => this.setState({ isPasswordSet: b })}
                    />
                  </div>
                  <input
                    onClick={
                      this.requirementsMet()
                        ? (e => this.login(context)).bind(this)
                        : null
                    }
                    type="button"
                    value="Connect"
                    data-wait="Please wait..."
                    className="submitbutton connect_account_button w-button"
                  />
                  <input
                    type="button"
                    value="Register"
                    data-wait="Please wait..."
                    className="submitbutton connect_account_button registerbutton w-button"
                    onClick={this.props.register}
                  />
                </div>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                {this.buildErrorMessage()}
              </div>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }

  buildErrorMessage() {
    function getMessage() {
      switch (this.state.status) {
        case this.statusCode[2]:
          return <div>Wrong Credentials</div>;
        case this.statusCode[1]:
        default:
          return (
            <div>Oops! Something went wrong while submitting the form.</div>
          );
      }
    }

    return (
      <div
        className="w-form-fail"
        style={
          this.state.status !== this.statusCode[0] ? { display: 'block' } : {}
        }
      >
        {getMessage.call(this)}
      </div>
    );
  }

  requirementsMet() {
    return this.state.isEmailSet && this.state.isPasswordSet;
  }

  setIsConfirmed(isConfirmed = false) {
    this.setState({ isConfirmed });
  }

  async login(context) {
    try {
      let { try_email, try_e_password } = context.state;
      let response = await API.get(try_email, try_e_password);
      let result = await response.json();

      let settings;
      if (result.settings) {
        try {
          settings = JSON.parse(JSON.parse(result.settings));
        } catch (e) {
          console.error(e);
        }
      }

      let { password, username, subscription, timetable } = result;
      context.setState(p => ({
        ...settings,
        email: try_email,
        e_password: try_e_password,
        password: password || p.password,
        username: username || p.username,
        subscription: subscription || p.subscription,
        timetable: timetable || p.timetable
      }));
      this.props.toggle();
      this.setState({ status: this.statusCode[0] });
    } catch (e) {
      this.setState({ status: this.statusCode[1] });
    }
  }
}
