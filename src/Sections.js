import React, { Component } from 'react';
import Switch from './ContextSwitch';
import Account from './Account';
import { Link } from 'react-router-dom';
import { Context } from './Context';

export default class Sections extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <div className="generalsettings general_settings_landing_page">
            <h1 className="general_settings generaltitle">Sections</h1>
            <div
              data-delay="0"
              className="dropdown w-dropdown"
              style={{ zIndex: 999999 }}
            >
              <Account />
            </div>
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
            {/*<h1 className="general_settings subtitle">Messages</h1>*/}
            {/*<Switch value="enable_message" />*/}
            {!this.isLoggedin(context) ? this.warning(context) : null}
          </div>
        )}
      </Context.Consumer>
    );
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
