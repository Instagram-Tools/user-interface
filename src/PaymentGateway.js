import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import StripeDropIn from './StripeDropIn';

import env from './Env';

const STRIPE_PUBLIC_KEY = env.STRIPE_PUBLIC_KEY;

export default class PaymentGateway extends React.Component {
  render() {
    return (
      <StripeProvider apiKey={STRIPE_PUBLIC_KEY}>
        <Elements>
          <StripeDropIn
            setSubscription={this.props.setSubscription}
            onSuccess={this.props.onSuccess}
            url={this.props.url}
          />
        </Elements>
      </StripeProvider>
    );
  }
}
