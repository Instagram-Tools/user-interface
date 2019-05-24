import React, { Component } from 'react';
import PaymentGateway from './PaymentGateway';
import { Context } from './Context';
import Price from './Price';

export default class LandingPagePayment extends Component {
  render() {
    if (!this.props.display) return <div />;
    return (
      <Context.Consumer>
        {context => (
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
                <Price />
              </div>
            </div>
            <div className="buy_plan_holder">
              <PaymentGateway
                onSuccess={((subscription, context) => {
                  context.setState(
                    { subscription },
                    this.props.toggle.bind(this)
                  );
                }).bind(this)}
              />
            </div>
          </div>
        )}
      </Context.Consumer>
    );
  }
}
