import React, { Component } from 'react';
import Switch from './ContextSwitch';
import Account from './Account';

class NavBar extends Component {
  render() {
    return (
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
      </div>
    );
  }
}

export default NavBar;
