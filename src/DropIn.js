import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

import './DropInCSS.css';

import env from './Env';

const PAYMENT_MANAGER = env.PAYMENT_MANAGER;

class DropIn extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

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

  async submit(ev) {
    ev.preventDefault();
    let { token } = await this.props.stripe.createToken({ name: 'Name' });
    let response = await fetch(`${PAYMENT_MANAGER}/purchase/`, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: token.id
    });

    if (response.ok) console.log('Purchase Complete! response:', response);
  }

  render() {
    return (
      <form onSubmit={this.submit}>
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
