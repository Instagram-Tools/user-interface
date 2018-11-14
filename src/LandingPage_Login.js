import React, { Component } from 'react';
import TextField from './TextField';
import API from './API_Gateway';
import { Context } from './Context';

export default class LandingPage_Login extends Component {
  state = {
    isEmailSet: false,
    isPasswordSet: false
  };

  render() {
    return (
      <Context.Consumer>
        {context => {
          return (
            <div
              style={this.props.display ? { opacity: 1, display: 'unset' } : {}}
              className="connect_insta_account landing_page_connect"
            >
              <h1 className="settingtitle">Login</h1>
              <a href="/privacy-policy" className="title_menu_element privacy">
                Your details will not be transferred to third parties, and
                neither your email, nor your password will be saved. Click to
                see our privacy policy.
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
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
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
    let { try_email, try_e_password } = context.state;
    let result = await API.get(try_email, try_e_password);

    let settings = JSON.parse(JSON.parse(result.settings));
    let timetable = JSON.parse(result.timetable);
    let { password, username, subscription } = result;

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
  }
}
