import React, { Component } from 'react';
import TextField from './TextField';
import API from './API_Gateway';
import { Context } from './Context';
import { Link } from 'react-router-dom';

export default class LandingPage_Login extends Component {
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
              <h1 className="settingtitle">Login</h1>
              <Link to="/privacy-policy" className="title_menu_element privacy">
                Your details will not be transferred to third parties, and
                neither your email, nor your password will be saved. Click to
                see our privacy policy.
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
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div
                  className="w-form-fail"
                  style={this.state.error ? { display: 'block' } : {}}
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

  requirementsMet() {
    return this.state.isEmailSet && this.state.isPasswordSet;
  }

  setIsConfirmed(isConfirmed = false) {
    this.setState({ isConfirmed });
  }

  async login(context) {
    try {
      let { try_email, try_e_password } = context.state;
      let result = await API.get(try_email, try_e_password);

      let settings = JSON.parse(JSON.parse(result.settings));
      let { password, username, subscription, timetable } = result;

      context.setState({
        ...settings,
        email: try_email,
        e_password: try_e_password,
        password,
        username,
        subscription,
        timetable
      });

      this.props.toggle();
      this.setState({ error: false });
    } catch (e) {
      this.setState({ error: true });
    }
  }
}
