import React, { Component } from 'react';
import { Context } from './Context';
import LandingPageConnect from './LandingPageConnect';
import LandingPagePayment from './LandingPagePayment';
import LandingPageRegister from './LandingPageRegister';
import LandingPageLogin from './LandingPageLogin';
import LandingPageSuccess from './LandingPageSuccess';

export default class Account extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => {
          return (
            <div
              id="popups"
              style={
                context.state.registrationStep > 0
                  ? { opacity: 1, display: 'block' }
                  : { opacity: 0, display: 'none' }
              }
              onClick={this.resetStep.bind(context)}
              data-w-id="b2698b2e-f4ae-8511-f68d-03f81973a9a5"
              className="connect_insta_account_darkener landing_page_darkener"
            >
              <LandingPageLogin
                display={context.state.registrationStep === 11}
                toggle={this.resetStep.bind(context)}
                register={this.register.bind(context)}
              />
              <LandingPageRegister
                display={context.state.registrationStep === 1}
                toggle={this.nextStep.bind(context)}
                login={this.login.bind(context)}
              />
              <LandingPageConnect
                display={context.state.registrationStep === 2}
                toggle={this.nextStep.bind(context)}
              />
              <LandingPagePayment
                display={context.state.registrationStep === 3}
                toggle={this.nextStep.bind(context)}
              />
              <LandingPageSuccess
                display={context.state.registrationStep === 4}
                toggle={this.resetStep.bind(context)}
              />
            </div>
          );
        }}
      </Context.Consumer>
    );
  }

  nextStep() {
    let lastStep = 4;
    this.setState(p => ({
      registrationStep:
        p.registrationStep + 1 < lastStep ? p.registrationStep + 1 : lastStep
    }));
  }

  resetStep() {
    if (this.state.registrationStep >= 4)
      this.setState({ registrationStep: 0 });
  }

  register() {
    this.setState({ registrationStep: 1 });
  }

  login() {
    this.setState({ registrationStep: 11 });
  }
}
