import React, { Component } from 'react';
import { Context } from './Context';
import TextField from './TextField';
import PaymentGateway from './PaymentGateway';
import API from './API_Gateway';
import console from './Log';
import env from './Env';

export default class Settings extends Component {
  state = {
    init: true,
    show_set_e_password: false,
    show_confirm_e_password: false,
    show_password: false,
    error: false,
    success: false
  };

  async save(context) {
    let update = {
      set_e_password:
        this.context.set_e_password === this.context.set_e_password_confirm
          ? context.state.set_e_password
          : undefined,
      password: context.state.set_password
    };

    let data = API.data_to_save({ ...context.state, ...update });

    if (data) {
      API.put(data)
        .then(() =>
          context.setState({
            ...update,
            username: context.state.set_username || context.state.username,
            e_password: context.state.set_e_password || context.state.e_password
          })
        )
        .then(this.success.bind(this))
        .catch(this.error.bind(this));
    }
  }

  success(r) {
    console.log('Settings save():', r);
    this.setState({ success: true, error: false });
  }

  error(e) {
    console.error('Settings save():', e);
    this.setState({ success: false, error: true });
  }

  render() {
    return (
      <Context.Consumer>
        {context => {
          if (this.state.init) {
            this.setState({ init: false });
            context.setState({
              set_e_password: context.state.e_password,
              set_username: context.state.username,
              set_password: context.state.password
            });
          }

          return (
            <div>
              <div className="menu_bar_whitener" />
              <h1 className="settingtitle settingspage">Account</h1>
              <div className="w-form">
                <form
                  onSubmit={event =>
                    event.preventDefault() || this.save(context)
                  }
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
                        id="name"
                        value="set_email"
                      />
                    </div>
                    <div className="settingsdistributor new_row_left">
                      <h1 className="settingtitle setting_page_title">
                        Change Login Password
                      </h1>
                      <TextField
                        type={
                          this.state.show_set_e_password ? 'text' : 'password'
                        }
                        inputClass="text-field filter bottom_distance_20px settingsinput w-input"
                        maxLength="256"
                        name="name-2"
                        data-name="Name 2"
                        id="name-2"
                        value="set_e_password"
                      />
                      <div className="settingsdistributor bottom">
                        <div className="checkbox-field w-checkbox">
                          <input
                            onChange={event =>
                              this.setState({
                                show_set_e_password: event.target.checked
                              })
                            }
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
                      <TextField
                        type={
                          this.state.show_confirm_e_password
                            ? 'text'
                            : 'password'
                        }
                        inputClass="text-field filter bottom_distance_20px settingsinput w-input"
                        maxLength="256"
                        name="name-2"
                        data-name="Name 2"
                        id="name-2"
                        value="set_e_password_confirm"
                      />
                      <div className="settingsdistributor bottom">
                        <div className="checkbox-field w-checkbox">
                          <input
                            onChange={event =>
                              this.setState({
                                show_confirm_e_password: event.target.checked
                              })
                            }
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
                      <TextField
                        type="text"
                        inputClass="text-field filter bottom_distance_20px settingsinput w-input"
                        maxLength="256"
                        name="name-3"
                        data-name="Name 3"
                        label=""
                        id="name-3"
                        value="set_username"
                      />
                      {context.state.errorConnectAccount && (
                        <div className="errormessage">
                          No account connected. <br />Wrong Username / Password
                        </div>
                      )}
                    </div>
                    <div className="settingsdistributor new_row_right_down">
                      <h1 className="settingtitle setting_page_title">
                        Insta Password
                      </h1>
                      <TextField
                        type={this.state.show_password ? 'text' : 'password'}
                        inputClass="text-field filter bottom_distance_20px settingsinput w-input"
                        maxLength="256"
                        name="name-2"
                        data-name="Name 2"
                        label=""
                        id="name-2"
                        value="set_password"
                      />
                      <div className="settingsdistributor bottom">
                        <div className="checkbox-field w-checkbox">
                          <input
                            onChange={event =>
                              this.setState({
                                show_password: event.target.checked
                              })
                            }
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
                      label="Password"
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
                {this.saveAccountStatusMessage()}
              </div>
              <h1 className="settingtitle settingspage nodistance">Payment</h1>
              {context.state.errorPayment && (
                <div className="errormessage paymenterror">
                  Something went wrong with your payment. Please fix that in
                  order to continue using Pink Parrot.
                </div>
              )}
              <div className="buy_plan_holder settingspayment">
                <PaymentGateway
                  url={`${env.PAYMENT_MANAGER}/customer/update`}
                />
              </div>
              <h1 className="settingtitle settingspage nodistance">
                Delete account and end subscription
              </h1>
              <div className="errormessage deleteaccount">
                To delete your account and / or end your Pink Parrot
                subscription, please hit us up at{' '}
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
                        inputClass="text-field filter bottom_distance_20px settingsinput w-input"
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
                        <a
                          href="legal.html"
                          className="submitbutton legalbutton"
                        >
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
          );
        }}
      </Context.Consumer>
    );
  }

  saveAccountStatusMessage() {
    return (
      <React.Fragment>
        <div
          className="success-message-2 w-form-done"
          style={this.state.success ? { display: 'block' } : {}}
        >
          <div>Your settings have been changed!</div>
        </div>
        <div
          className="w-form-fail"
          style={this.state.error ? { display: 'block' } : {}}
        >
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </React.Fragment>
    );
  }
}
