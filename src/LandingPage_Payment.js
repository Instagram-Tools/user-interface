import React, { Component } from 'react';

export default class LandingPage_Payment extends Component {
  render() {
    return (
      <div className="connect_insta_account landing_page_payment">
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
              • Securest on the market<br />• Endless tweakability
            </h1>
            <h1 className="softwareheading price">
              Just <span className="opacity text-span">49,95€</span> / month!
            </h1>
          </div>
          <div className="paycolumn">
            <div className="envelopeholder">
              <img
                src="images/Envelope-Shadow.png"
                srcSet="images/Envelope-Shadow.png 500w, images/Envelope-Shadow.png 800w, images/Envelope-Shadow.png 1080w, images/Envelope-Shadow.png 1600w, images/Envelope-Shadow.png 2000w, images/Envelope-Shadow.png 2496w"
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
                srcSet="images/Envelope-Shadow.png 500w, images/Envelope-Shadow.png 800w, images/Envelope-Shadow.png 1080w, images/Envelope-Shadow.png 1600w, images/Envelope-Shadow.png 2000w, images/Envelope-Shadow.png 2496w"
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
        <div className="buy_plan_holder" />
      </div>
    );
  }
}
