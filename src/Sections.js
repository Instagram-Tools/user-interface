import React, { Component } from 'react';
import Switch from './ContextSwitch';
import Account from './Account';
import { Link } from 'react-router-dom';
import { Context } from './Context';
import Statistics from './Statistics';
import StartStopButton from './StartStopButton';
import BOT_Gateway from './BOT_Gateway';

export default class Sections extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <div
            className="generalsettings general_settings_landing_page"
            onClick={() => this.isBotActive(context)}
          >
            {this.activity(context)}
            <div
              data-delay="0"
              className="dropdown w-dropdown"
              style={{ zIndex: 999999 }}
            >
              <Account />
            </div>
            {this.isLoggedin(context) ? (
              <div className="switchwrapper">
                <h1 className="general_settings subtitle">Bot On/Off</h1>
                <StartStopButton value="bot_on" />
              </div>
            ) : null}
            <div className="switchwrapper">
              <h1 className="general_settings subtitle">Like</h1>
              <Switch value="do_like_enabled" />
            </div>
            <div className="switchwrapper">
              <h1 className="general_settings subtitle">Comment</h1>
              <Switch value="do_comment_enabled" />
            </div>
            <div className="switchwrapper">
              <h1 className="general_settings subtitle">Follow</h1>
              <Switch value="do_follow_enabled" />
            </div>
            <div className="switchwrapper">
              <h1 className="general_settings subtitle">Unfollow</h1>
              <Switch value="enable_unfollow" />
            </div>
            <div className="switchwrapper">
              <h1 className="general_settings subtitle">Messages</h1>
              <Switch value="enable_message" />
            </div>
            {!this.isLoggedin(context) ? (
              this.warning(context)
            ) : (
              <Statistics className="general_settings" />
            )}
          </div>
        )}
      </Context.Consumer>
    );
  }

  activity(context) {
    if (this.isLoggedin(context))
      if (context.state.bot_active)
        return (
          <h1 className="general_settings generaltitle distancegeneral">
            Bot active
          </h1>
        );
      else
        return (
          <h1
            style={{ color: '#ff4c44' }}
            className="general_settings generaltitle distancegeneral"
          >
            Bot inactive
          </h1>
        );
    else return <h1 className="general_settings generaltitle">Sections</h1>;
  }

  async isBotActive(context) {
    const bot_active = await BOT_Gateway.isBotRunning(context.state.username);
    console.log('bot_active', bot_active);
    context.setState({ bot_active });
  }

  warning(context) {
    return (
      <Link
        to="/interface"
        className="general_settings warningtext"
        onClick={this.clickOnLogin(context)}
      >
        If you already have a Pink Parrot account, please log in instead of
        using the interface below first.
      </Link>
    );
  }

  clickOnLogin(context) {
    return !this.isLoggedin(context) ? this.login.bind(context) : null;
  }

  login() {
    this.setState({ registrationStep: 11 });
  }

  isLoggedin(context) {
    return context.state.email && context.state.e_password;
  }
}
