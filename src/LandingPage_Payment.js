import React, { Component } from 'react';
import TextField from './TextField';
import envelope from './images/Asset-57-target.png';

export default class LandingPage_Payment extends Component {
  render() {
    return (
      <div
        style={this.props.display ? { display: 'flex' } : {}}
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
              Just <span className="opacity text-span">49,95€</span> / month!
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
                  inputStyle={{ minWidth: '100%' }}
                />
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div className="paycolumn">
            <div className="envelopeholder">
              <img
                src={envelope}
                srcSet={`${envelope} 500w, ${envelope} 800w, ${envelope} 1080w, ${envelope} 1423w`}
                sizes="100vw"
                className="image-2-copy-copy"
              />
            </div>
          </div>
        </div>
        <div className="buy_plan_holder" />
      </div>
    );
  }
}
