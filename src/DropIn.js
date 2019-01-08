import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

import './DropInCSS.css';

import env from './Env';
import { Context } from './Context';

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

  async submit(ev, context) {
    ev.preventDefault();
    let { token } = await this.props.stripe.createToken({
      name: context.state.email
    });
    let response = await fetch(`${PAYMENT_MANAGER}/purchase/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: token.id,
        email: context.state.email,
        discount_code: context.state.discount_code
      })
    });

    if (response.ok) console.log('Purchase Complete! response:', response);
    else console.error('Error on Purchase! response:', response);
  }

  render() {
    return (
      <Context.Consumer>
        {context => (
          <form onSubmit={ev => this.submit(ev, context)}>
            <label>
              Card details
              <CardElement {...this.createOptions(this.props.fontSize)} />
            </label>
            <button>Pay</button>
          </form>
        )}
      </Context.Consumer>
    );
  }
}

export default injectStripe(DropIn);
