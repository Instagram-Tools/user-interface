import React, { Component } from 'react';
import TextField from './TextField';
import TextFieldConfirm from './TextFieldConfirm';
import API_Gateway from './API_Gateway';
import { Context } from './Context';
import { Link } from 'react-router-dom';

export default class LandingPageRegister extends Component {
  errorCode = { 0: 'success', 1: 'PasswordError', 2: 'ServerError' };

  state = {
    isEmailSet: false,
    isPasswordSet: false,
    isConfirmed: false,
    error: this.errorCode[0]
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
              <h1 className="settingtitle">Register</h1>
              <Link to="/privacy-policy" className="title_menu_element privacy">
                Your details will not be transferred to third parties, and
                neither your email, nor your password will be saved. Click to
                see our privacy policy.
              </Link>
              <div className="w-form">
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
                  <TextFieldConfirm
                    type="password"
                    placeholder="Confirm Password"
                    value="try_e_password"
                    setIsConfirmed={this.setIsConfirmed.bind(this)}
                  />
                </div>
                <input
                  onClick={(e => this.submit(context)).bind(this)}
                  type="button"
                  value="Connect"
                  data-wait="Please wait..."
                  className="submitbutton connect_account_button w-button"
                />
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div
                  className="w-form-fail"
                  style={
                    this.state.error !== this.errorCode[0]
                      ? { display: 'block' }
                      : {}
                  }
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

  async submit(context) {
    if (!this.requirementsMet())
      return this.setState({ error: this.errorCode[1] });
    if (
      await API_Gateway.register(
        context.state.try_email,
        context.state.try_e_password
      )
    ) {
      context.setState({
        email: context.state.try_email,
        e_password: context.state.try_e_password
      });
      return this.props.toggle();
    } else return this.setState({ error: this.errorCode[2] });
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
