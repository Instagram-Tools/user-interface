import React, { Component } from 'react';
import TextField from './TextField';
import Payment_Gateway from './Payment_Gateway';
import { Context } from './Context';

export default class LandingPage_Payment extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => {
          return (
            <div
              style={
                this.props.display
                  ? { display: 'flex', position: 'absolute', margin: 0 }
                  : { display: 'none' }
              }
              className="connect_insta_account landing_page_payment"
            >
              <h1 className="settingtitle subscribetitle">
                Subscribe to Pink Parrot
              </h1>
              <div className="title_menu_element trialtext">
                You can quit any month.
              </div>
              <div className="software_plan_holder">
                <div className="paycolumn">
                  <h1 className="softwareheading">
                    Let&#x27;s get your Insta to the next level!
                  </h1>
                  <h1 className="titlepage buysubtitle">
                    Launch price until Jan 1, 2019
                  </h1>
                  <h1 className="softwareheading price">
                    Just <span className="opacity text-span">29,95€</span> /
                    month!
                  </h1>
                  <div className="w-form">
                    <form
                      id="email-form-3"
                      name="email-form-3"
                      data-name="Email Form 3"
                    >
                      <TextField
                        type="text"
                        placeholder="Promo Code"
                        value="discount_code"
                        inputStyle={{ minWidth: '100%', width: '100%' }}
                      />
                    </form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="paycolumn right_pay_column">
                  <div className="envelopeholder">
                    <img
                      src="images/Asset-57-target.png"
                      srcSet="images/Asset-57-target-p-500.png 500w, images/Asset-57-target-p-800.png 800w, images/Asset-57-target-p-1080.png 1080w, images/Asset-57-target.png 1423w"
                      sizes="100vw"
                      alt=""
                      className="image-2-copy-copy"
                    />
                    <img
                      src="images/Envelope-Foreground.svg"
                      alt=""
                      className="image-2-copy"
                    />
                    <img
                      src="images/Envelope-Shadow.png"
                      srcSet="images/Envelope-Shadow-p-500.png 500w, images/Envelope-Shadow-p-800.png 800w, images/Envelope-Shadow-p-1080.png 1080w, images/Envelope-Shadow-p-1600.png 1600w, images/Envelope-Shadow-p-2000.png 2000w, images/Envelope-Shadow.png 2496w"
                      sizes="100vw"
                      alt=""
                      className="image-2"
                    />
                    <img
                      src="images/Envelope-Notifications.svg"
                      alt=""
                      className="image"
                    />
                  </div>
                </div>
              </div>
              <div className="buy_plan_holder">
                <Payment_Gateway
                  style={{ width: '100%' }}
                  userdata={{
                    email: context.state.email,
                    discount_code: context.state.discount_code
                  }}
                  setSubscription={sub => this.setSubscription(sub, context)}
                />
              </div>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }

  setSubscription(subscription, context) {
    context.setState({ subscription });
    this.toggle(context);
  }
}
