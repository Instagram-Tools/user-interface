import React, { Component } from 'react';
import { Context } from './Context';

export default class Notifications extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => context.state.notifications.map(this.buildNotification)}
      </Context.Consumer>
    );
  }

  buildNotification() {
    return (
      <div className="notification update_delivered_as_notification notification_in_settings">
        <div className="notificationheader_div w-clearfix">
          <div className="notificationicon" />
          <h1 className="notificationheading">
            <span>UPDATE PAYMENT INFO</span>
          </h1>
          <div className="deletebutton notificationclose">
            <div className="xicon" />
          </div>
        </div>
        <div className="notificationtext">
          You&#x27;re broke af bitch!<br />
        </div>
      </div>
    );
  }
}
