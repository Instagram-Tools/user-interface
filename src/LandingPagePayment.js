import React, { Component } from 'react';
import TextField from './TextField';
import PaymentGateway from './PaymentGateway';
import { Context } from './Context';
import API from './API_Gateway';

export default class LandingPagePayment extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => {
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
                  <h1 className="softwareheading price">
                    Just 29,95€ / month!
                  </h1>
                  <div className="w-form">
                    <TextField
                      inputClass="text-field-2 filter connect_account_filter w-input"
                      className="text_field_description-2 below connect_account_text"
                      type="text"
                      placeholder="Promo Code"
                      value="discount_code"
                      // inputStyle={{ minWidth: '100%', width: '100%' }}
                    />
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="error-message-3 w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buy_plan_holder">
                <PaymentGateway />
              </div>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}
