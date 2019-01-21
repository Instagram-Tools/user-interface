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
      <div className="generalinfo update_delivered_as_notification notification_in_settings">
        <div className="notificationheader_div w-clearfix">
          <div className="notificationicon" />
          <h1 className="notificationheading">NEW UPDATE!</h1>
          <div className="deletebutton notificationclose">
            <div className="xicon" />
          </div>
        </div>
        <div className="notificationtext">
          You&#x27;re using an old version of Pink Parrot. To update, please
          close this tab, open a new one and use Pink Parrot there.<br />
        </div>
      </div>
    );
  }
}
