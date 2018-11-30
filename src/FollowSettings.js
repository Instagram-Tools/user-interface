import React, { Component } from 'react';
import TextFieldNumber from './TextFieldNumber';
import Help from './Help';
import './css/settings.css';

export default class FollowSettings extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="header">
          <h1 className="titlepage followunderline">Follows</h1>
        </div>
        <div className="body">
          <div className="w-form form">
            <div className="titleholder">
              <label htmlFor="email" className="settingtitle">
                Follow Percentage
              </label>
              <Help
                data-w-id="22c58d28-9a42-f414-7b98-09bcc5c05a9b"
                className="helptext"
              >
                <strong>
                  Follow X percent of Users crawled you interacted with:{' '}
                </strong>{' '}
                <br />
                100% means every User will be followed. <br />
                50% means every second User will be followed.
              </Help>
            </div>
            <TextFieldNumber
              placeholder="Follow Percentage %"
              max={100}
              value="do_follow_percentage"
            />
          </div>
        </div>
      </div>
    );
  }
}
