import React, { Component } from 'react';
import { Context } from './Context';
import TextField from './TextField';
import BOT_Gateway from './BOT_Gateway';

const STATUS = {
  none: 0,
  success: 1,
  error: 2
};

export default class VerifyAccount extends Component {
  searchParams = new URL(window.location.href).searchParams;

  state = {
    show_password: false,
    statusCode: STATUS.none
  };

  render() {
    return (
      <Context.Consumer>
        {context => (
          <form
            onSubmit={event => event.preventDefault() || this.submit(event)}
            className="form-3"
          >
            <h1 className="settingtitle settingspage">
              Verify Instagram Account
            </h1>
            <div>
              <h1 className="settingtitle setting_page_title">Email</h1>
              <TextField
                type="text"
                inputClass="text-field filter bottom_distance_20px settingsinput w-input"
                maxLength="256"
                value="email"
                name="email"
                defaultValue={this.searchParams.get('email')}
              />
            </div>
            <div>
              <h1 className="settingtitle setting_page_title">
                Insta Username
              </h1>
              <TextField
                type="text"
                inputClass="text-field filter bottom_distance_20px settingsinput w-input"
                maxLength="256"
                value="username"
                name="username"
                defaultValue={this.searchParams.get('username')}
              />
            </div>
            <div>
              <h1 className="settingtitle setting_page_title">
                Insta Password
              </h1>
              <TextField
                type={this.state.show_password ? 'text' : 'password'}
                inputClass="text-field filter bottom_distance_20px settingsinput w-input"
                maxLength="256"
                value="password"
                name="password"
              />
              <div className="settingsdistributor bottom">
                <div className="checkbox-field w-checkbox">
                  <input
                    onChange={event =>
                      this.setState({
                        show_password: event.target.checked
                      })
                    }
                    type="checkbox"
                    className="checkbox-5 w-checkbox-input"
                  />
                  <label
                    htmlFor="Show-2"
                    className="fieldlabel showlabel w-form-label"
                  >
                    Show
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h1 className="settingtitle setting_page_title">
                Verification Code
              </h1>
              <TextField
                type="text"
                inputClass="text-field filter bottom_distance_20px settingsinput w-input"
                maxLength="256"
                value="sec_code"
                name="sec_code"
              />
              <input
                type="submit"
                value="Submit"
                data-wait="Please wait..."
                className="submitbutton settingssave w-button"
              />
            </div>
            {this.buildErrorMessage()}
          </form>
        )}
      </Context.Consumer>
    );
  }

  submit(event) {
    let elements = event.target.elements;
    let data = {};
    for (let i = 0; i < elements.length; i++) {
      data[elements[i].name] = elements[i].value;
    }
    BOT_Gateway.tryLoginBot(data)
      .then(this.setState({ statusCode: STATUS.success }))
      .catch(e => {
        console.error(`Error in submit(${data}) of VerifyAccount:`, e);
        this.setState({ statusCode: STATUS.error });
      });
  }

  buildErrorMessage() {
    function getMessage() {
      switch (this.state.statusCode) {
        case STATUS.none:
          return <div />;
        case STATUS.success:
          return <div>Success :-)</div>;
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
          this.state.statusCode !== STATUS.none ? { display: 'block' } : {}
        }
      >
        {getMessage.call(this)}
      </div>
    );
  }
}
