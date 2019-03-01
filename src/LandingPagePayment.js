import React, { Component } from 'react';
import TextField from './TextField';
import PaymentGateway from './PaymentGateway';

export default class LandingPagePayment extends Component {
  render() {
    return (
      <div
        style={
          this.props.display
            ? { opacity: 1, display: 'flex' }
            : { display: 'none' }
        }
        className="connect_insta_account"
      >
        <h1 className="logintitle">Subscribe to Pink Parrot</h1>
        <div className="loginsubtitle">You can quit any month.</div>
        <div className="software_plan_holder">
          <div className="paycolumn">
            <h1 className="softwareheading">
              Let&#x27;s get your Insta to the next level!
            </h1>
            <h1 className="titlepage buysubtitle">
              Exclusive beta price until Jan 1 2019!
            </h1>
            <h1 className="softwareheading price">Just 29,95€ / month!</h1>
            <div className="w-form">
              <TextField
                type="text"
                inputClass="text-field filter bottom_distance_20px settingsinput w-input"
                value="discount_code"
              />
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="error-message-3 w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="buy_plan_holder">
          <PaymentGateway
            onSuccess={((subscription, context) =>
              context.setState({ subscription, registrationStep: 4 })).bind(
              this
            )}
          />
        </div>
      </div>
    );
  }
}
