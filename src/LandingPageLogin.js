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
                  ? { opacity: 1, display: 'flex' }
                  : { display: 'none' }
              }
              className="connect_insta_account"
            >
              <h1 className="logintitle">Login to Pink Parrot</h1>
              <NavHashLink
                smooth
                to="/legal/#privacy"
                className="loginsubtitle clickprivacy"
              >
                Your details will not be transferred to third parties. Your
                password is encrypted. Click to see our privacy policy.
              </NavHashLink>
              <form
                className="w-form"
                onSubmit={(event => this.submit(context, event)).bind(this)}
              >
                <div className="formholder_connect_account">
                  <div className="columnholder filterholder first connect_account_column">
                    <TextField
                      inputClass="text-field-2 filter connect_account_filter w-input"
                      className="text_field_description-2 below connect_account_text"
                      type="email"
                      placeholder="Email"
                      value="try_email"
                      required
                    />
                    <TextField
                      inputClass="text-field-2 filter connect_account_filter w-input"
                      className="text_field_description-2 below connect_account_text"
                      type="password"
                      placeholder="Password"
                      value="try_e_password"
                      required
                    />
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    data-wait="Please wait..."
                    className="loginbutton w-button"
                  />
                  <input
                    type="button"
                    value="Register"
                    data-wait="Please wait..."
                    className="loginbutton w-button"
                    onClick={this.props.register}
                  />
                </div>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                {this.buildErrorMessage()}
              </form>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }

  submit(context, event) {
    event.preventDefault();
    this.login(context);
  }

  buildErrorMessage() {
    function getMessage() {
      switch (this.state.status) {
        case this.statusCode[2]:
          return <div>Wrong email or password. Please try again :-)</div>;
        case this.statusCode[1]:
        default:
          return (
            <div className="text-block-3 nope">
              Something went wrong. Please try again or contact
              info@pinkparrot.co
            </div>
          );
      }
    }

    return (
      <div
        className="error-message-3 w-form-fail"
        style={
          this.state.status !== this.statusCode[0] ? { display: 'block' } : {}
        }
      >
        {getMessage.call(this)}
      </div>
    );
  }

  async login(context) {
    try {
      let { try_email, try_e_password } = context.state;
      let response = await API.get(try_email, try_e_password);

      if (response.status === 403)
        return this.setState({ status: this.statusCode[2] });

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
