import React, { Component } from 'react';
import { Context, REGISTRATION_STEPS } from './Context';
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
                  ? { opacity: 1, display: 'flex' }
                  : { opacity: 0, display: 'none' }
              }
              data-w-id="b2698b2e-f4ae-8511-f68d-03f81973a9a5"
              className="connect_insta_account_darkener landing_page_darkener"
            >
              <LandingPageLogin
                display={
                  context.state.registrationStep ===
                  REGISTRATION_STEPS['LandingPageLogin']
                }
                toggle={this.resetStep.bind(context)}
                register={this.register.bind(context)}
              />
              <LandingPageRegister
                display={
                  context.state.registrationStep ===
                  REGISTRATION_STEPS['LandingPageRegister']
                }
                toggle={this.nextStep.bind(context)}
                login={this.login.bind(context)}
              />
              <LandingPagePayment
                display={
                  context.state.registrationStep ===
                  REGISTRATION_STEPS['LandingPagePayment']
                }
                toggle={this.nextStep.bind(context)}
              />
              <LandingPageConnect
                display={
                  context.state.registrationStep ===
                  REGISTRATION_STEPS['LandingPageConnect']
                }
                toggle={this.nextStep.bind(context)}
              />
              <LandingPageSuccess
                display={
                  context.state.registrationStep ===
                  REGISTRATION_STEPS['LandingPageSuccess']
                }
                toggle={this.resetStep.bind(context)}
              />
            </div>
          );
        }}
      </Context.Consumer>
    );
  }

  nextStep() {
    let lastStep = REGISTRATION_STEPS['LandingPageSuccess'];
    this.setState(p => ({
      registrationStep:
        p.registrationStep + 1 < lastStep ? p.registrationStep + 1 : lastStep
    }));
  }

  resetStep() {
    if (this.state.registrationStep >= REGISTRATION_STEPS['LandingPageSuccess'])
      this.setState({ registrationStep: REGISTRATION_STEPS['None'] });
  }

  register() {
    this.setState({
      registrationStep: REGISTRATION_STEPS['LandingPageRegister']
    });
  }

  login() {
    this.setState({ registrationStep: REGISTRATION_STEPS['LandingPageLogin'] });
  }
}
