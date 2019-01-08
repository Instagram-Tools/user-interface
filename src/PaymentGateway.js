import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import DropIn from './DropIn';

export default class PaymentGateway extends React.Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_b1xnLwuXAD8nz71YQQX2ygaP">
        <Elements>
          <DropIn setSubscription={this.props.setSubscription} />
        </Elements>
      </StripeProvider>
    );
  }
}
