import React, { Component } from 'react';
import TextField from './TextField';
import API from './API_Gateway';
import console from './Log';
import { Context } from './Context';

export default class LandingPageConnect extends Component {
  statusCode = {
    0: 'None',
    1: 'UsernameError',
    2: 'ServerError'
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
              <h1 className="logintitle">Connect your Instagram account</h1>
              <span className="loginsubtitle clickprivacy">
                If you have turned on two factor authorization, please turn it
                off. Pink Parrot will not work otherwise.
              </span>
              <form className="w-form" onSubmit={e => this.submit(context, e)}>
                <div className="formholder_connect_account">
                  <div className="columnholder filterholder first connect_account_column">
                    <TextField
                      inputClass="text-field-2 filter connect_account_filter w-input"
                      className="text_field_description-2 below connect_account_text"
                      type="text"
                      placeholder="Instagram Username"
                      value="username"
                      required
                    />
                    <TextField
                      inputClass="text-field-2 filter connect_account_filter w-input"
                      className="text_field_description-2 below connect_account_text"
                      type="password"
                      placeholder="Instagram Password"
                      value="password"
                      required
                    />
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    data-wait="Please wait..."
                    className="loginbutton w-button"
                  />
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
          return (
            <div>Please use your Instagram Username instead of an Email!</div>
          );
        default:
          return (
            <div>
              Oops! Something went wrong while submitting the form. Please try
              again :-)
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

  async submit(context, event) {
    event.preventDefault();
    if (this.isEmail(context)) {
      this.setState({ status: this.statusCode[1] });
    } else if (await this.save(context)) {
      this.setState({ status: this.statusCode[0] });
      this.props.toggle();
    } else {
      this.setState({ status: this.statusCode[2] });
    }
  }

  async save(context) {
    try {
      let data = API.data_to_save({ ...context.state });

      if (data) {
        await API.put(data);
        return true;
      }
    } catch (e) {
      console.error('LandingPageConnect save():', e);
      return false;
    }
  }

  isEmail(context) {
    let email = context.state.username;
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
