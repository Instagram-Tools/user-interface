import React, { Component } from 'react';
import { Context } from './Context';
import TextField from './TextField';
import { NavHashLink } from 'react-router-hash-link';

export default class About extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <div>
            <div className="whystatement">
              <div className="whystatement topstatement" />
              <div className="titlepage abouttitle bottomimage" />
            </div>
            <div className="howstatement">
              <div className="typeleft">
                <h1 className="titlepage aboutsubtitle distance">
                  How do we push you?
                </h1>
                <div className="titlepage usptext subtext abouttext righttext2">
                  <strong>
                    Do you have a goal on Instagram?<br />
                  </strong>Let it be building a business, personal brand, or
                  conveying a message that&#x27;s dear to you.<br />
                  <strong>
                    Pink Parrot is your rocket towards that goal, while your
                    competition is taking the stairs.
                  </strong>
                </div>
              </div>
              <div className="typeleft holder">
                <div className="typeleft typeimage">
                  <div className="spacehoverboarder" />
                </div>
              </div>
              <div className="typeright">
                <h1 className="titlepage aboutsubtitle distance">
                  Why even bother?
                </h1>
                <div className="titlepage usptext subtext abouttext">
                  <strong>We always hated Insta bots.</strong>
                  <br />But they make sense on a platform where{' '}
                  <em>great content isn&#x27;t enough to stand out.</em>
                  <br />For Pink Parrot&#x27;s co-founders, Instagram is the
                  present and the future of our career.<br />
                  <strong>
                    So we&#x27;re building Pink Parrot to be the best Insta bot.
                  </strong>
                </div>
              </div>
            </div>
            <div id="whatstatement" className="whatstatement">
              <div className="titleholder_bacon">
                <h1 className="titlepage featurestitle">WHAT do we offer?</h1>
                <h1 className="titlepage aboutsubtitle">
                  Bacon. Success. Rocket. Texts on websites can be annoyingly
                  vague. Let&#x27;s talk features.
                </h1>
              </div>
              <div className="usp_wrap about_page_wrap">
                <div id="w-node-ababf5ef94ca-1b786f28" className="usp">
                  <div className="uspicon distance3vh" />
                  <div className="titlepage usptext">Catch me if you can</div>
                  <div className="titlepage usptext subtext">
                    <strong>Most Secure -</strong> It&#x27;s one of the main
                    reasons bot users get banned nowadays:{' '}
                    <em>
                      Instagram finds it suspicious if too much of your
                      account&#x27;s traffic comes from a desktop device. <br />‍
                    </em>We use self-built proxies simulating a mobile device.
                    Moreover, our entire automatism software is built to act
                    human-like. Last but not least, we&#x27;re always up to date
                    about Instagram updates that require us to adapt.
                  </div>
                </div>
                <div id="w-node-ababf5ef94d7-1b786f28" className="usp">
                  <div className="uspicon sniper distance5vh" />
                  <div className="titlepage usptext">Sniper targeting</div>
                  <div className="titlepage usptext subtext">
                    <strong>Hyper Targeting -</strong> Because having a lot of
                    followers doesn&#x27;t matter if they don&#x27;t care.{' '}
                    <em>
                      The conversion - be it a sale, a new fan or whatnot -
                      comes from reaching the right people at the right time.<br />
                    </em>Pink Parrot&#x27;s interface lets you target people
                    already interested in your content in every relevant detail.
                    So you can organically increase your reach and business.
                    Reach new career stages and cooperations!<br />
                  </div>
                </div>
                <div
                  id="w-node-ababf5ef94e4-1b786f28"
                  className="usp bottomusp"
                >
                  <div className="uspicon privacyicon distance5vh" />
                  <div className="titlepage usptext">Privacy</div>
                  <div className="titlepage usptext subtext">
                    <strong>Privacy -</strong> a service like ours needs to
                    remotely control your Instagram account. That&#x27;s how it
                    can like, comment and follower other accounts for instance.
                    Meaning, <em>we need your Instagram password.</em>
                    <br />But we only save it on your device and not on our
                    servers! Meaning, even we couldn&#x27;t access it if we
                    wanted to.<br />
                  </div>
                </div>
                <div
                  id="w-node-ababf5ef94f1-1b786f28"
                  className="usp bottomusp"
                >
                  <div className="uspicon alwaysonicon distance5vh" />
                  <div className="titlepage usptext">Bot works. Whenever.</div>
                  <div className="titlepage usptext subtext">
                    <strong>Always on -</strong>{' '}
                    <em>
                      Why should you be required to keep your device on in order
                      to make your bot run?
                    </em>
                    <br />We put Pink Parrot on a server. You adjust the
                    settings, schedule when the bot&#x27;s supposed to be active
                    (to target your target group better and so it becomes more
                    human-like) and lean back.
                  </div>
                </div>
              </div>
            </div>
            <div id="pricing" className="pricing">
              <div className="software_plan_holder aboutpage_buy">
                <div className="paycolumn aboutcolumn">
                  <h1 className="softwareheading">
                    Let&#x27;s get your Insta to the next level!
                  </h1>
                  <h1 className="titlepage buysubtitle">Reduced beta price</h1>
                  <h1 className="softwareheading price">
                    Just <span className="text-span">29,95€</span> / month!
                  </h1>
                  <div className="form-block-3 w-form">
                    <TextField
                      type="text"
                      inputClass="text-field filter bottom_distance_20px settingsinput w-input"
                      value="discount_code"
                      className="displaynone"
                    />
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
                <div className="div-block-2">
                  <NavHashLink
                    smooth
                    to="/interface/#popups"
                    className="submitbutton connect_account_button trialbutton about_buy_button w-button"
                    onClick={this.clickOnLogin.bind(context)}
                  >
                    Buy
                  </NavHashLink>
                </div>
              </div>
            </div>
            <div className="contact">
              <h1 className="titlepage featurestitle contacttitle">
                Questions?
              </h1>
              <h1 className="titlepage aboutsubtitle contactsubtitle">
                We warmly invite you to contact us :-)
              </h1>
              <a href="mailto:info@pinkparrot.co">
                <h1 className="titlepage legalsubtitle contacttext aboutemail">
                  info@pinkparrot.co
                </h1>
              </a>
            </div>
          </div>
        )}
      </Context.Consumer>
    );
  }

  clickOnLogin() {
    return this.setState({ registrationStep: 1 });
  }
}
