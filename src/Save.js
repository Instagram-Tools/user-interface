import React, { Component } from 'react';
import { Context } from './Context';
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
                Your changes are saved! Keep pressing save if you change
                something :-)
              </div>
            </div>
            <div
              style={{ display: this.state.error ? 'block' : 'none' }}
              className="error-message w-form-fail"
            >
              <div className="text-block-2">
                <span>
                  Something went wrong. Please try again or contact{' '}
                  <a href="mailto:info@pinkparrot.co">info@pinkparrot.co</a>
                </span>
              </div>
            </div>
            <div
              className="header savebutton holder save_header_bg"
              style={{ margin: 0 }}
            >
              <div
                data-w-id="d8b0db36-ca47-deb4-6250-cc991b79ddb9"
                className="header savebutton color transparent"
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
    if (!(context.state.email && context.state.e_password)) {
      return context.setState({ registrationStep: 1 });
    } else if (!(context.state.password && context.state.username)) {
      return context.setState({ registrationStep: 2 });
    } else if (!context.state.subscription) {
      return context.setState({ registrationStep: 3 });
    }

    let data = API.data_to_save({ ...context.state });

    if (data) {
      API.put(data)
        .then(this.success.bind(this))
        .catch(this.error.bind(this));
    }
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
