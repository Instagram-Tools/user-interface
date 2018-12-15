import React, { Component } from 'react';
import TextField from './TextField';
import PaymentGateway from './PaymentGateway';
import { Context } from './Context';

export default class LandingPageSuccess extends Component {
  render() {
    return (
      <div
        style={
          this.props.display
            ? { display: 'flex', position: 'absolute', margin: 0 }
            : { display: 'none' }
        }
        className="connect_insta_account landing_page_payment successmessage"
      >
        <h1 className="settingtitle subscribetitle">
          We're pumped to welcome you to Pink Parrot! 😏
        </h1>
        <div className="successimage">
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
        <button
          onClick={this.props.toggle}
          className="submitbutton connect_account_button get_started_button w-button"
        >
          Get Started
        </button>
      </div>
    );
  }

  setSubscription(subscription) {
    this.setState({ subscription, registrationStep: 0 });
  }
}
