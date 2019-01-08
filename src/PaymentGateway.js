import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import DropIn from './DropIn';

import env from './Env';

const STRIPE_PUBLIC_KEY = env.STRIPE_PUBLIC_KEY;

export default class PaymentGateway extends React.Component {
  render() {
    return (
      <StripeProvider apiKey={STRIPE_PUBLIC_KEY}>
        <Elements>
          <DropIn setSubscription={this.props.setSubscription} />
        </Elements>
      </StripeProvider>
    );
  }
}
