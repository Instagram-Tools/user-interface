import React, { Component } from 'react';
import { Context } from './Context';
import API from './API_Gateway';

export default class Save extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <div className="header savebutton holder">
            <div
              data-w-id="d8b0db36-ca47-deb4-6250-cc991b79ddb9"
              className="header savebutton color"
              style={{ left: 0 }}
            />

            <input
              onClick={() => this.saving(context.state)}
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
        )}
      </Context.Consumer>
    );
  }

  saving(state) {
    let settings = { ...state };
    let { password, username, email, e_password, timetable } = settings;
    delete settings.password;
    delete settings.username;
    delete settings.email;
    delete settings.e_password;
    delete settings.timetable;

    const data = {
      email,
      username,
      password,
      settings: JSON.stringify(settings),
      timetable
    };

    // console.log('e:', email, e_password);
    API.login(email, e_password)
      .then(r => console.log('res r:', r))
      .catch(e => console.log('err r:', e))
      .then(() => {
        API.put(data)
          .then(r => console.log('res s:', r))
          .catch(e => console.log('err s:', e));
      });
  }
}
