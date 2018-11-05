import React from 'react';
import DropIn from 'braintree-web-drop-in-react';
import env from './Env';

const PAYMENT_MANAGER = env.PAYMENT_MANAGER;

export default class Payment_Gateway extends React.Component {
  instance;

  state = {
    clientToken: null
  };

  async componentDidMount() {
    // Get a client token for authorization from your server
    const response = await fetch(`${PAYMENT_MANAGER}/client_token/`);
    const clientToken = await response.text(); // If returned as JSON string
    this.setState({
      clientToken
    });
  }

  async buy() {
    // Send the nonce to your server
    const { nonce } = await this.instance.requestPaymentMethod();
    await fetch(`${PAYMENT_MANAGER}/purchase/${nonce}`);
  }

  render() {
    if (!this.state.clientToken) {
      return (
        <div style={this.props.style}>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div style={this.props.style}>
          <DropIn
            options={{
              authorization: this.state.clientToken,
              paymentOptionPriority: [
                'card',
                'paypal',
                'paypalCredit',
                'venmo',
                'applePay'
              ],
              paypal: true,
              paypalCredit: true,
              venmo: true,
              applePay: true
            }}
            onInstance={instance => (this.instance = instance)}
          />
          <button
            onClick={this.buy.bind(this)}
            className="submitbutton bigasssubmitbutton w-button"
            style={{ position: 'inherit', margin: 'auto' }}
          >
            Buy Now!
          </button>
        </div>
      );
    }
  }
}
