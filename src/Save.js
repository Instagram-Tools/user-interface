import React, { Component } from 'react';
import { Context } from './Context';
import API from './API_Gateway';
import console from './Log';
import { unsavedState } from './Context';

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
                Thank you! Your submission has been received!
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
                onClick={() => this.saving(context)}
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

  saving(context) {
    let settings = { ...context.state };
    let {
      password,
      username,
      email,
      e_password,
      timetable,
      subscription
    } = settings;
    if (!(password && username && email && e_password && timetable)) {
      return context.setState({ toggled: true });
    }

    for (let prop in unsavedState) {
      delete settings[prop];
    }

    delete settings.password;
    delete settings.username;
    delete settings.email;
    delete settings.e_password;
    delete settings.timetable;
    delete settings.subscription;

    const data = {
      email,
      username,
      password,
      subscription,
      settings: JSON.stringify(settings),
      timetable
    };

    console.log('e:', email, e_password);
    API.login(email, e_password)
      .then(r => console.log('res r:', r))
      .catch(e => console.log('err r:', e))
      .then(() => {
        API.put(data)
          .then(this.success.bind(this))
          .catch(this.error.bind(this));
      });
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
