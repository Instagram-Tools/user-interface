import React, { Component } from 'react';

export default class StartStopButton extends Component {
  render() {
    return (
      <input
        type="button"
        value="Start"
        className="submitbutton connect_account_button w-button"
      />
    );
  }
}
