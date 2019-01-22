import React, { Component } from 'react';
import './css/normalize.css';
import './css/webflow.css';
import './css/code-connect.webflow.css';
import { Context } from './Context';

export default class App extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <div>
            <h1 className="settingtitle settingspage">Account</h1>
            <div className="w-form">
              <form
                id="email-form-2"
                name="email-form-2"
                data-name="Email Form 2"
                className="form-3"
              >
                <div className="settings">
                  <div className="settingsdistributor weg">
                    <h1 className="settingtitle setting_page_title">
                      Login Email
                    </h1>
                    <input
                      type="text"
                      className="text-field settingsfield w-input"
                      maxLength="256"
                      name="name"
                      data-name="Name"
                      placeholder="timo.morawitz@witz.mora"
                      id="name"
                    />
                  </div>
                  <div className="settingsdistributor new_row_left">
                    <h1 className="settingtitle setting_page_title">
                      Change Login Password
                    </h1>
                    <input
                      type="text"
                      className="text-field settingsfield w-input"
                      maxLength="256"
                      name="name-2"
                      data-name="Name 2"
                      placeholder="**********"
                      id="name-2"
                    />
                    <div className="settingsdistributor bottom">
                      <div className="checkbox-field w-checkbox">
                        <input
                          type="checkbox"
                          id="Show"
                          name="Show"
                          data-name="Show"
                          className="checkbox-5 w-checkbox-input"
                        />
                        <label
                          htmlFor="Show"
                          className="fieldlabel showlabel w-form-label"
                        >
                          Show
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="settingsdistributor newrow">
                    <h1 className="settingtitle setting_page_title">
                      Repeat Login Password
                    </h1>
                    <input
                      type="text"
                      className="text-field settingsfield w-input"
                      maxLength="256"
                      name="name-2"
                      data-name="Name 2"
                      placeholder="**********"
                      id="name-2"
                    />
                    <div className="settingsdistributor bottom">
                      <div className="checkbox-field w-checkbox">
                        <input
                          type="checkbox"
                          id="Show-4"
                          name="Show-4"
                          data-name="Show 4"
                          className="checkbox-5 w-checkbox-input"
                        />
                        <label
                          htmlFor="Show-4"
                          className="fieldlabel showlabel w-form-label"
                        >
                          Show
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="settingsdistributor new_row_left_down">
                    <h1 className="settingtitle setting_page_title">
                      Insta Username
                    </h1>
                    <input
                      type="text"
                      className="text-field settingsfield error w-input"
                      maxLength="256"
                      name="name-3"
                      data-name="Name 3"
                      placeholder="timo.morawitz.official"
                      id="name-3"
                    />
                    <div className="errormessage">
                      No account connected. <br />Wrong Username / Password
                    </div>
                  </div>
                  <div className="settingsdistributor new_row_right_down">
                    <h1 className="settingtitle setting_page_title">
                      Insta Password
                    </h1>
                    <input
                      type="text"
                      className="text-field settingsfield error w-input"
                      maxLength="256"
                      name="name-2"
                      data-name="Name 2"
                      placeholder="**********"
                      id="name-2"
                    />
                    <div className="settingsdistributor bottom">
                      <div className="checkbox-field w-checkbox">
                        <input
                          type="checkbox"
                          id="Show-2"
                          name="Show-2"
                          data-name="Show 2"
                          className="checkbox-5 w-checkbox-input"
                        />
                        <label
                          htmlFor="Show-2"
                          className="fieldlabel showlabel w-form-label"
                        >
                          Show
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="settings buttons w-clearfix">
                  <input
                    type="submit"
                    value="Save"
                    data-wait="Please wait..."
                    className="submitbutton settingssave w-button"
                  />
                  <div className="lockedicon unlocked" />
                  <h1 className="settingtitle locktitle typingpassword">
                    Click on the lock to make changes.
                  </h1>
                  <input
                    type="text"
                    className="password_field w-input"
                    maxLength="256"
                    name="name-6"
                    data-name="Name 6"
                    placeholder="Password"
                    id="name-6"
                  />
                  <input
                    type="submit"
                    value="Unlock"
                    data-wait="Please wait..."
                    className="submitbutton passwordcontinue w-button"
                  />
                </div>
              </form>
              <div className="success-message-2 w-form-done">
                <div>Your settings have been changed!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
            <h1 className="settingtitle settingspage nodistance">Payment</h1>
            <div className="errormessage paymenterror">
              Something went wrong with your payment. Please fix that in order
              to continue using Pink Parrot.
            </div>
            <div className="w-form">
              <form
                id="email-form-2"
                name="email-form-2"
                data-name="Email Form 2"
                className="form-3"
              >
                <div className="settings">
                  <div className="settingsdistributor">
                    <h1 className="settingtitle setting_page_title">
                      Card Number
                    </h1>
                    <input
                      type="text"
                      className="text-field settingsfield w-input"
                      maxLength="256"
                      name="name-5"
                      data-name="Name 5"
                      placeholder="12345678"
                      id="name-5"
                    />
                  </div>
                  <div className="settingsdistributor">
                    <h1 className="settingtitle setting_page_title">
                      Expiry Date
                    </h1>
                    <input
                      type="text"
                      className="text-field settingsfield w-input"
                      maxLength="256"
                      name="name-2"
                      data-name="Name 2"
                      placeholder="MM/YY"
                      id="name-2"
                    />
                  </div>
                  <div className="settingsdistributor">
                    <h1 className="settingtitle setting_page_title">
                      Security Code
                    </h1>
                    <input
                      type="text"
                      className="text-field settingsfield w-input"
                      maxLength="256"
                      name="name-3"
                      data-name="Name 3"
                      placeholder="***"
                      id="name-3"
                    />
                    <div className="settingsdistributor bottom">
                      <div className="checkbox-field w-checkbox">
                        <input
                          type="checkbox"
                          id="Show-3"
                          name="Show-3"
                          data-name="Show 3"
                          className="checkbox-5 w-checkbox-input"
                        />
                        <label
                          htmlFor="Show-3"
                          className="fieldlabel showlabel w-form-label"
                        >
                          Show
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="settings buttons w-clearfix">
                  <input
                    type="submit"
                    value="Save"
                    data-wait="Please wait..."
                    className="submitbutton settingssave w-button"
                  />
                  <div className="lockedicon unlocked" />
                  <h1 className="settingtitle locktitle typingpassword">
                    Click on the lock to make changes.
                  </h1>
                  <input
                    type="text"
                    className="password_field w-input"
                    maxLength="256"
                    name="name-6"
                    data-name="Name 6"
                    placeholder="Password"
                    id="name-6"
                  />
                  <input
                    type="submit"
                    value="Unlock"
                    data-wait="Please wait..."
                    className="submitbutton passwordcontinue w-button"
                  />
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
            <h1 className="settingtitle settingspage nodistance">
              Delete account and end subscription
            </h1>
            <div className="errormessage deleteaccount">
              To delete your account and / or end your Pink Parrot subscription,
              please hit us up at{' '}
              <a href="mailto:info@pinkparrot.co?subject=Quit">
                info@pinkparrot.co
              </a>{' '}
              - we&#x27;re happy to assist you.
            </div>
            <div className="settings switchaccount">
              <h1 className="settingtitle settingspage weg">Switch to...</h1>
            </div>
            <div className="settings_last_section">
              <div className="settingsdistributor deletesettings">
                <h1 className="settingtitle setting_page_title deletetitle">
                  Delete account &amp; end subscription
                </h1>
                <div className="form-block-5 w-form">
                  <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    className="form-2"
                  >
                    <input
                      type="text"
                      id="name-4"
                      name="name-4"
                      data-name="Name 4"
                      maxLength="256"
                      className="text-field settingsfield error-copy w-input"
                    />
                    <div className="errormessage deleteaccount">
                      To delete your account and end your subscription on the
                      next date possible (you can quit once per month), enter
                      your password in the field above and press
                      &quot;bye&quot;.
                    </div>
                    <div className="settingsdistributor bottom height">
                      <input
                        type="submit"
                        value="bye"
                        data-wait="Please wait..."
                        className="submitbutton byebutton locked w-button"
                      />
                      <a href="legal.html" className="submitbutton legalbutton">
                        legal
                      </a>
                    </div>
                  </form>
                  <div className="success-message-3 w-form-done">
                    <div>Bye!</div>
                  </div>
                  <div className="error-message-2 w-form-fail">
                    <div>Wrong password!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Context.Consumer>
    );
  }
}
