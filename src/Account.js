import React, { Component } from 'react';
import TextField from './TextField';

export default class Account extends Component {
  state = {
    toggled: false
  };

  render() {
    const display = {
      opacity: this.state.toggled ? 1 : 0,
      display: this.state.toggled ? 'unset' : 'none'
    };
    return (
      <div>
        <div
          onClick={this.toggle.bind(this)}
          data-w-id="5bc62214-6295-d5b6-2514-2ebbae7e5d29"
          className="dropdown-toggle w-dropdown-toggle"
        >
          <div
            data-w-id="90672a42-9dd0-d234-71ce-11328a477e0a"
            className="icon w-icon-dropdown-toggle"
          />
          <div className="general_settings subtitle account">Account</div>
        </div>
        <nav className="dropdown-list w-dropdown-list">
          <a href="#" className="dropdownlink w-dropdown-link">
            Alex Bosch
          </a>
          <a href="#" className="dropdownlink w-dropdown-link">
            Gaylord69
          </a>
          <a href="#" className="dropdownlink w-dropdown-link">
            Sex
          </a>
          <a
            href="#"
            data-w-id="2ef84843-5f94-80b8-30e8-eebec6eb258d"
            className="dropdownlink bottom_add_account w-dropdown-link"
          >
            Add account{' '}
            <span
              data-w-id="4f8e18b0-394f-5f2b-c803-4957ff6fb5ee"
              className="pluscharacter"
            >
              +
            </span>
          </a>
        </nav>

        <div
          style={display}
          data-w-id="9117adb1-9a36-eed7-254f-2f0d378e7215"
          className="connect_insta_account"
        >
          <h1 className="settingtitle">Connect your Instagram account</h1>
          <a href="#" className="title_menu_element privacy">
            Your details will not be transferred to third parties. Click to see
            our privacy policy.
          </a>
          <div className="w-form">
            <form
              id="email-form-2"
              name="email-form-2"
              data-name="Email Form 2"
              className="formholder_connect_account"
            >
              <div className="columnholder filterholder first connect_account_column">
                <TextField type="email" placeholder="Email" value="email" />
                <TextField
                  type="password"
                  placeholder="Password"
                  value="e_password"
                />
                <TextField
                  type="email"
                  placeholder="Instagram Username"
                  value="username"
                />
                <TextField
                  type="password"
                  placeholder="Instagram Password"
                  value="password"
                />
              </div>
              <input
                onClick={this.toggle.bind(this)}
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
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <div
          style={display}
          onClick={this.toggle.bind(this)}
          data-w-id="b2698b2e-f4ae-8511-f68d-03f81973a9a5"
          className="connect_insta_account_darkener"
        />
      </div>
    );
  }

  toggle() {
    this.setState(p => ({ toggled: !p.toggled }));
  }
}
