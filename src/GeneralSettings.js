import React, { Component } from 'react';
import Switch from './ContextSwitch';

class GeneralSettings extends Component {
  render() {
    return (
      <div className="generalsettings">
        <h1 className="general_settings">General</h1>
        <div data-delay="0" className="dropdown w-dropdown">
          <div
            data-w-id="5bc62214-6295-d5b6-2514-2ebbae7e5d29"
            className="dropdown-toggle w-dropdown-toggle"
          >
            <div
              data-w-id="90672a42-9dd0-d234-71ce-11328a477e0a"
              className="icon w-icon-dropdown-toggle"
            />
            <div className="general_settings subtitle account">Account</div>
          </div>
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
        <Switch value="enable_like" />
        <h1 className="general_settings subtitle">Comment</h1>
        <Switch value="enable_comment" />
        <h1 className="general_settings subtitle">Follow</h1>
        <Switch value="enable_follow" />
        <h1 className="general_settings subtitle">Unfollow</h1>
        <Switch value="enable_unfollow" />
        <h1 className="general_settings subtitle">Messages</h1>
        <Switch value="enable_message" />
      </div>
    );
  }
}

export default GeneralSettings;
