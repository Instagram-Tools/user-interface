import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

import './DropInCSS.css';

import env from './Env';
import { Context } from './Context';
import API from './API_Gateway';
import console from './Log';

const PAYMENT_MANAGER = env.PAYMENT_MANAGER;

class StripeDropIn extends React.Component {
  statusCode = {
    0: 'nothing',
    1: 'Some Error',
    2: 'success',
    3: 'No such coupon'
  };

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      status: this.statusCode[0],
      isLoading: false
    };
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
    this.setState({ isLoading: true });
    let { token } = await this.props.stripe.createToken({
      name: context.state.email
    });
    try {
      let response = await fetch(`${PAYMENT_MANAGER}/purchase/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: token.id,
          email: context.state.email.toLowerCase(),
          discount_code: context.state.discount_code
        })
      });

      if (response.ok) {
        console.log('Purchase Complete! response:', response);
        this.setSubscription(await response.text(), context);
      } else if ((await response.status) === 406) {
        console.error(
          'StripeDropIn.submit(): No such coupon, 406 Not Acceptable'
        );
        this.setState({
          status: this.statusCode[3],
          isLoading: false
        });
        context.setState({
          discount_code: ''
        });
      } else {
        console.error('StripeDropIn.submit() response not ok:', response);
        throw Error('response not ok');
      }
    } catch (e) {
      this.error(e);
    }
  }

  render() {
    return (
      <Context.Consumer>
        {context => (
          <div style={{ width: '100%' }}>
            <form onSubmit={ev => this.submit(ev, context)}>
              <label className="loginsubtitle">
                Card details
                <CardElement {...this.createOptions(this.props.fontSize)} />
              </label>
              <button disabled={this.state.isLoading} className="loginbutton">
                {this.state.isLoading ? 'Loading...' : 'Submit'}
              </button>
              {this.buildErrorMessage()}
            </form>
          </div>
        )}
      </Context.Consumer>
    );
  }

  buildErrorMessage() {
    function getMessage() {
      switch (this.state.status) {
        case this.statusCode[3]:
          return (
            <div className="text-block-3 nope">
              We searched for that code and didn’t find it. Please use another
              one. If you press "Submit" again, you will use no code and pay the
              full price.
            </div>
          );
        case this.statusCode[2]:
          return (
            <div className="text-block-3 nope">
              You successfully updated your payment data.
            </div>
          );
        case this.statusCode[1]:
        default:
          return (
            <div className="text-block-3 nope">
              Something went wrong. Please try again or contact
              info@pinkparrot.co
            </div>
          );
      }
    }

    let messageClass =
      this.state.status === this.statusCode[2]
        ? 'success-message settingsmessage'
        : 'error-message-3';
    return (
      <div
        className={`${messageClass} w-form-fail`}
        style={
          this.state.status !== this.statusCode[0] ? { display: 'block' } : {}
        }
      >
        {getMessage.call(this)}
      </div>
    );
  }

  setSubscription(subscription, context) {
    this.success(subscription, context);
  }

  success(subscription, context) {
    console.log('success s:', subscription);
    this.props.onSuccess(subscription, context);
    return this.setState({ status: this.statusCode[2], isLoading: false });
  }

  error(e) {
    console.error('Error on StripeDropIn.submit():', e);
    return this.setState({ status: this.statusCode[1], isLoading: false });
  }
}

export default injectStripe(StripeDropIn);
