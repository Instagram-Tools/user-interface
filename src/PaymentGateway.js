import React from 'react';
import { Elements } from 'react-stripe-elements';
import DropIn from './DropIn';

export default class PaymentGateway extends React.Component {
  render() {
    return (
      <Elements>
        <DropIn />
      </Elements>
    );
  }
}
