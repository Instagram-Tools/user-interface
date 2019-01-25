import React, { Component } from 'react';
import { Context } from './Context';

export default class Notifications extends Component {
  render() {
    return (
      <Context.Consumer>
        {context =>
          context.state.notifications.map((n, i) =>
            this.buildNotification(n, i, context)
          )
        }
      </Context.Consumer>
    );
  }

  buildNotification(notification, index, context) {
    return (
      <div
        className="notification update_delivered_as_notification notification_in_settings"
        key={index}
      >
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
          {notification}
          <br />
        </div>
      </div>
    );
  }
}
