import React, { Component } from 'react';
import TextField from './TextField';
import API from './API_Gateway';
import console from './Log';
import { Context } from './Context';

export default class LandingPageConnect extends Component {
  state = {
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
              </form>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }

  async submit(context, event) {
    event.preventDefault();
    if (await this.save(context)) this.props.toggle();
  }

  async save(context) {
    try {
      let data = API.data_to_save({ ...context.state });

      if (data) {
        await API.put(data);
        this.setState({ error: false });
        return true;
      }
    } catch (e) {
      console.error('LandingPageConnect save():', e);
      this.setState({ error: true });
      return false;
    }
  }
}
