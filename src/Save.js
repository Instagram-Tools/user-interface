import React, { Component } from 'react';
import { Context, unsavedState } from './Context';
import API from './API_Gateway';
import console from './Log';

export default class Save extends Component {
  state = {
    success: false,
    error: false
  };

  render() {
    return (
      <Context.Consumer>
        {context => (
          <div>
            <div
              style={{ display: this.state.success ? 'block' : 'none' }}
              className="success-message w-form-done"
            >
              <div className="text-block">
                Thank you! Pink Parrot is active now!
              </div>
            </div>
            <div
              style={{ display: this.state.error ? 'block' : 'none' }}
              className="error-message w-form-fail"
            >
              <div className="text-block-2">
                Oops! Something went wrong while submitting the form.
              </div>
            </div>
            <div className="header savebutton holder" style={{ margin: 0 }}>
              <div
                data-w-id="d8b0db36-ca47-deb4-6250-cc991b79ddb9"
                className="header savebutton color"
                style={{ left: 0 }}
              />

              <input
                onClick={() => this.save(context)}
                type="button"
                value="Save"
                data-wait="saving..."
                data-w-id="d8b0db36-ca47-deb4-6250-cc991b79ddba"
                className="submitbutton bigasssubmitbutton w-button"
              />
              <h1
                data-w-id="d8b0db36-ca47-deb4-6250-cc991b79ddbb"
                className="titlepage"
              >
                Saved!
              </h1>
            </div>
          </div>
        )}
      </Context.Consumer>
    );
  }

  save(context) {
    let data = this.data_to_save(context);

    if (data) {
      API.put(data)
        .then(this.success.bind(this))
        .catch(this.error.bind(this));
    }
  }

  data_to_save(context) {
    let settings = { ...context.state };
    let {
      bot_on,
      email,
      e_password,
      password,
      username,
      subscription,
      timetable
    } = settings;
    let data = undefined;

    if (!(email && e_password)) {
      context.setState({ registrationStep: 1 });
    } else if (!(password && username)) {
      context.setState({ registrationStep: 2 });
    } else if (!subscription) {
      context.setState({ registrationStep: 3 });
    } else {
      for (let prop in unsavedState) {
        delete settings[prop];
      }

      delete settings.bot_on;
      delete settings.password;
      delete settings.username;
      delete settings.email;
      delete settings.e_password;
      delete settings.timetable;
      delete settings.subscription;

      data = {
        bot_on,
        email,
        username,
        password,
        subscription,
        settings: JSON.stringify(settings),
        timetable
      };

      console.log('Data to save:', data);
    }
    return data;
  }

  success(r) {
    console.log('res s:', r);
    this.setState({ success: true, error: false });
  }

  error(e) {
    console.log('err s:', e);
    this.setState({ success: false, error: true });
  }
}
