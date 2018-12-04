import React, { Component } from 'react';
import { Context } from './Context';
import LandingPage_Connect from './LandingPage_Connect';
import LandingPage_Payment from './LandingPage_Payment';
import LandingPage_Register from './LandingPage_Register';
import LandingPage_Login from './LandingPage_Login';
import LandingPage_Success from './LandingPage_Success';

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
                onClick={this.nextStep.bind(context)}
                data-w-id="5bc62214-6295-d5b6-2514-2ebbae7e5d29"
                className="dropdown-toggle w-dropdown-toggle"
              >
                <div className="general_settings subtitle account">
                  {context.state.username ? context.state.username : 'Account'}
                </div>
                <div className="icon w-icon-dropdown-toggle" />
              </div>
              <LandingPage_Login
                display={context.state.registrationStep === 11}
                toggle={this.resetStep.bind(context)}
                register={this.register.bind(context)}
              />
              <LandingPage_Register
                display={context.state.registrationStep === 1}
                toggle={this.nextStep.bind(context)}
              />
              <LandingPage_Connect
                display={context.state.registrationStep === 2}
                toggle={this.nextStep.bind(context)}
              />
              <LandingPage_Payment
                display={context.state.registrationStep === 3}
                toggle={this.nextStep.bind(context)}
              />
              <LandingPage_Success
                display={context.state.registrationStep === 4}
                toggle={this.resetStep.bind(context)}
              />
              <div
                style={
                  context.state.registrationStep > 0
                    ? { opacity: 1, display: 'unset' }
                    : {}
                }
                onClick={this.resetStep.bind(context)}
                data-w-id="b2698b2e-f4ae-8511-f68d-03f81973a9a5"
                className="connect_insta_account_darkener landing_page_darkener"
              />
            </div>
          );
        }}
      </Context.Consumer>
    );
  }

  nextStep() {
    this.setState(p => ({ registrationStep: p.registrationStep + 1 }));
  }

  resetStep() {
    this.setState({ registrationStep: 0 });
  }

  register() {
    this.setState({ registrationStep: 1 });
  }
}
