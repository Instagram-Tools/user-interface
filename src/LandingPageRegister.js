import React, { Component } from 'react';
import TextField from './TextField';
import TextFieldConfirm from './TextFieldConfirm';
import API_Gateway from './API_Gateway';
import { Context } from './Context';
import { NavHashLink } from 'react-router-hash-link';

export default class LandingPageRegister extends Component {
  statusCode = {
    0: 'success',
    1: 'PasswordError',
    2: 'ServerError',
    3: 'EmailTakenError'
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
              <h1 className="logintitle">Register</h1>
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
                onSubmit={(e => this.submit(context, e)).bind(this)}
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
                    <TextFieldConfirm
                      inputClass="text-field-2 filter connect_account_filter w-input"
                      className="text_field_description-2 below connect_account_text"
                      type="password"
                      placeholder="Confirm Password"
                      value="try_e_password"
                      setIsConfirmed={this.setIsConfirmed.bind(this)}
                      required
                    />
                  </div>
                  <input
                    type="submit"
                    value="Connect"
                    data-wait="Please wait..."
                    className="loginbutton w-button"
                  />
                  <input
                    type="button"
                    value="Login"
                    data-wait="Please wait..."
                    className="loginbutton w-button"
                    onClick={this.props.login}
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

  buildErrorMessage() {
    function getMessage() {
      switch (this.state.status) {
        case this.statusCode[1]:
          return <div>The passwords didnʼt match. Please try again :-)</div>;
        case this.statusCode[3]:
          return (
            <div>
              This email is already registered. Please log in instead :-)
            </div>
          );
        default:
          return (
            <div>
              Something went wrong with this email. Please try again :-)
            </div>
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

  async submit(context, event) {
    event.preventDefault();

    if (!this.requirementsMet())
      return this.setState({ status: this.statusCode[1] });
    switch (
      await API_Gateway.register(
        context.state.try_email,
        context.state.try_e_password
      )
    ) {
      case 200:
        context.setState({
          email: context.state.try_email,
          e_password: context.state.try_e_password
        });
        return this.props.toggle();
      case 403:
        return this.setState({ status: this.statusCode[3] });
      case 500:
      default:
        return this.setState({ status: this.statusCode[2] });
    }
  }

  requirementsMet() {
    return this.state.isConfirmed;
  }

  setIsConfirmed(isConfirmed = false) {
    this.setState({ isConfirmed });
  }
}
