import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

import './DropInCSS.css';

class DropIn extends React.Component {
  createOptions(fontSize, padding) {
    return {
      style: {
        base: {
          fontSize,
          color: '#424770',
          letterSpacing: '0.025em',
          fontFamily: 'Source Code Pro, monospace',
          '::placeholder': {
            color: '#aab7c4'
          },
          padding
        },
        invalid: {
          color: '#9e2146'
        }
      }
    };
  }

  handleSubmit(ev) {
    ev.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then(payload => console.log('[token]', payload));
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Card details
          <CardElement {...this.createOptions(this.props.fontSize)} />
        </label>
        <button>Pay</button>
      </form>
    );
  }
}

export default injectStripe(DropIn);
