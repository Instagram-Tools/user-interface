import React, { Component } from 'react';
import Switch from './ContextSwitch';
import Account from './Account';

class NavBar extends Component {
  render() {
    return (
      <div className="generalsettings">
        <div data-delay="0" className="dropdown w-dropdown">
          <Account />
          <nav className="dropdown-list w-dropdown-list">
            <a href="#" className="dropdownlink w-dropdown-link">
              Alex Bosch
            </a>
            <a href="#" className="dropdownlink w-dropdown-link">
              Gaylord69
            </a>
            <a href="#" className="dropdownlink w-dropdown-link">
              Sex
            </a>
            <a
              href="#"
              data-w-id="2ef84843-5f94-80b8-30e8-eebec6eb258d"
              className="dropdownlink bottom_add_account w-dropdown-link"
            >
              Add account{' '}
              <span
                data-w-id="4f8e18b0-394f-5f2b-c803-4957ff6fb5ee"
                className="pluscharacter"
              >
                +
              </span>
            </a>
          </nav>
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
