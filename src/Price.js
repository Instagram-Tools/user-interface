import React, { Component } from 'react';
import { Context } from './Context';
import console from './Log';
import './Save.css';
import { formatMoney } from './Format';
import TextField from './TextField';
import env from './Env';

const PAYMENT_MANAGER = env.PAYMENT_MANAGER;
const PRICE = 59.95;

export default class Price extends Component {
  state = {
    price: PRICE,
    success: false,
    error: false
  };

  render() {
    return (
      <Context.Consumer>
        {context => (
          <React.Fragment>
            <h1 className="softwareheading price">
              Just{' '}
              <span className="text-span">{formatMoney(this.state.price)}</span>{' '}
              / month!
            </h1>
            <div className="form-block-3 w-form">
              <TextField
                type="text"
                inputClass="text-field filter bottom_distance_20px settingsinput w-input"
                value="discount_code"
                placeholder="Promo Code"
                onEnter={(() => this.updatePrice(context)).bind(this)}
              />
              <div
                className="submitbutton connect_account_button trialbutton check-code-button w-button"
                onClick={(() => this.updatePrice(context)).bind(this)}
              />
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div
                className="error-message-3 code-error w-form-fail"
                style={{ display: this.state.error ? 'block' : 'none' }}
              >
                <div className="text-block-3 nope-2">Invalid Code.</div>
              </div>
            </div>
          </React.Fragment>
        )}
      </Context.Consumer>
    );
  }

  async updatePrice(context) {
    let discount_code = context.state.discount_code || '';
    try {
      let response = await fetch(
        `${PAYMENT_MANAGER}/price/discount/${discount_code}`
      );
      if ((await response.status) === 200) {
        let json = await response.json();
        let price = json.amount_off
          ? PRICE - json.amount_off / 100
          : PRICE * (100 - json.percent_off) / 100;
        this.setState({ price });
        this.success(response);
        return;
      } else throw new Error(await response.text());
    } catch (e) {
      this.error(e);
      this.setState({ price: PRICE });
    }
  }

  success(r) {
    console.log('res s:', r);
    this.setState(p => ({ success: true, error: false }));
  }

  error(e) {
    console.log('err s:', e);
    this.setState(p => ({ success: false, error: true }));
  }
}
