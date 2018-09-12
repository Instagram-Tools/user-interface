import React, { Component } from 'react';
import Switch from './ContextSwitch';
import Account from './Account';

class NavBar extends Component {
  render() {
    return (
      <div className="generalsettings">
        <div
          data-delay="0"
          className="dropdown w-dropdown"
          style={{ zIndex: 999999 }}
        >
          <Account />
        </div>
        <h1 className="general_settings subtitle">Like</h1>
        <Switch value="do_like_enabled" />
        <h1 className="general_settings subtitle">Comment</h1>
        <Switch value="do_comment_enabled" />
        <h1 className="general_settings subtitle">Follow</h1>
        <Switch value="do_follow_enabled" />
        <h1 className="general_settings subtitle">Unfollow</h1>
        <Switch value="enable_unfollow" />
        {/*<h1 className="general_settings subtitle">Messages</h1>*/}
        {/*<Switch value="enable_message" />*/}
      </div>
    );
  }
}

export default NavBar;
