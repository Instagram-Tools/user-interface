import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import DropIn from './DropIn';

import env from './Env';
import API from './API_Gateway';
import { Context } from './Context';

const STRIPE_PUBLIC_KEY = env.STRIPE_PUBLIC_KEY;

export default class PaymentGateway extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {context => {
          return (
            <StripeProvider apiKey={STRIPE_PUBLIC_KEY}>
              <Elements>
                <DropIn
                  setSubscription={sub => this.setSubscription(sub, context)}
                />
              </Elements>
            </StripeProvider>
          );
        }}
      </Context.Consumer>
    );
  }

  async setSubscription(subscription, context) {
    await context.setState({ subscription });
    API.put(API.data_to_save({ ...context.state, subscription })).catch(
      console.error
    );

    this.props.toggle(context);
  }
}
