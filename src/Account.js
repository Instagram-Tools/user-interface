import React, { Component } from 'react';
import TextField from './TextField';
import { Context } from './Context';
import LandingPage_Connect from './LandingPage_Connect';

export default class Account extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => {
          const display = {
            opacity: context.state.toggled ? 1 : 0,
            display: context.state.toggled ? 'unset' : 'none'
          };

          return (
            <div>
              <div
                onClick={this.toggle.bind(context)}
                data-w-id="5bc62214-6295-d5b6-2514-2ebbae7e5d29"
                className="dropdown-toggle w-dropdown-toggle"
              >
                <div
                  data-w-id="90672a42-9dd0-d234-71ce-11328a477e0a"
                  className="icon w-icon-dropdown-toggle"
                />
                <div className="general_settings subtitle account">Account</div>
              </div>
              <LandingPage_Connect
                display={display}
                toggle={this.toggle.bind(context)}
              />
              <div
                style={display}
                onClick={this.toggle.bind(context)}
                data-w-id="b2698b2e-f4ae-8511-f68d-03f81973a9a5"
                className="connect_insta_account_darkener landing_page_darkener"
              />
            </div>
          );
        }}
      </Context.Consumer>
    );
  }

  toggle() {
    this.setState(p => ({ toggled: !p.toggled }));
  }
}
