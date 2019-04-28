import React, { Component } from 'react';
import Switch from './ContextSwitch';
import Account from './Account';
import { Context } from './Context';
import StartStopButton from './StartStopButton';
import BOT_Gateway from './BOT_Gateway';
import console from './Log';

export default class Sections extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <div className="generalsettings">
            {this.activity(context)}
            <Account />
            {this.isLoggedin(context) ? (
              <div className="switchwrapper general_switch_wrapper">
                <h1 className="general_settings subtitle generalswitch">
                  Bot Off/On
                </h1>
                <StartStopButton value="started" />
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
          </div>
        )}
      </Context.Consumer>
    );
  }

  activity(context) {
    if (this.isLoggedin(context) && context.state.username)
      if (context.state.bot_active)
        return (
          <h1 className="general_settings generaltitle distancegeneral">
            Bot active
          </h1>
        );
      else if (context.state.started && this.isStarting(context))
        return (
          <h1
            style={{ color: '#f6ec31' }}
            className="general_settings generaltitle distancegeneral"
          >
            Bot starting
          </h1>
        );
      else
        return (
          <h1
            style={{ color: '#ff4c44' }}
            className="general_settings generaltitle distancegeneral"
          >
            Bot sleeping
          </h1>
        );
    else return <h1 className="general_settings generaltitle">Sections</h1>;
  }

  async isBotActive(context) {
    if (context.state.username) {
      const bot_active = await BOT_Gateway.isBotRunning(context.state.username);
      console.log('bot_active', bot_active);
      context.setState({ bot_active });
    }
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

  isStarting(context) {
    let { timetable } = context.state;
    let tt = [];
    for (let i = 0; i < timetable.length; i += 2) {
      tt = tt.concat({ from: timetable[i], to: timetable[i + 1] });
    }
    tt = tt.filter(
      t =>
        this.format(t.from) < this.format() && this.format() < this.format(t.to)
    );
    return tt.length > 0;
  }

  format(date = new Date()) {
    let d = new Date(date);
    return new Date(4, 1, d.getDay(), d.getHours(), d.getMinutes());
  }
}
