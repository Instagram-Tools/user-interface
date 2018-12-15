import React, { Component } from 'react';
import Help from './Help';
import TextFieldComments from './TextFieldComments';

export default class MessageSettings extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="header">
          <h1 className="titlepage">Messages</h1>
        </div>
        <div className="body">
          <div className="form-block w-form form">
            <div className="titleholder">
              <label htmlFor="email" className="settingtitle">
                Define message when someone follows you
              </label>
              <Help>
                <strong>This could be your HelpText: </strong>
                <br />
                and or<br />
                recommendations
              </Help>
            </div>
            <TextFieldComments
              value="messages_onfollow"
              placeholder="Enter Text you want to message"
            />
          </div>
        </div>
      </div>
    );
  }
}
