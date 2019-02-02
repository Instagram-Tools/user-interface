import React, { Component } from 'react';
import { Context } from './Context';
import PopUps from './PopUps';

export default class Account extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => {
          return (
            <div
              data-delay="0"
              className="dropdown w-dropdown"
              style={
                context.state.registrationStep > 0
                  ? { zIndex: 1000 }
                  : { zIndex: 0 }
              }
            >
              <div
                data-w-id="5bc62214-6295-d5b6-2514-2ebbae7e5d29"
                className="dropdown-toggle w-dropdown-toggle"
              >
                <div className="general_settings subtitle account">
                  {context.state.username ? context.state.username : 'Account'}
                </div>
              </div>
              <PopUps />
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}
