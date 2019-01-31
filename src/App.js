import React, { Component } from 'react';
import './css/normalize.css';
import './css/webflow.css';
import './css/code-connect.webflow.css';
import Progress from './ProgressBar';
import Sections from './Sections';
import GeneralSettings from './GeneralSettings';
import LikeSettings from './LikeSettings';
import CommentSettings from './CommentSettings';
import FollowSettings from './FollowSettings';
import UnfollowSettings from './UnfollowSettings';
// import MessageSettings from './MessageSettings';
import ActivitySettings from './ActivitySettings';
import { Context } from './Context';
import Save from './Save';
import GeneralInfo from './GeneralInfo';

export default class App extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <div className={this.props.className} style={this.props.style}>
            <div className="menu_bar_whitener" />
            <Progress />
            <Sections />
            <GeneralInfo />
            <GeneralSettings />
            <LikeSettings
              className={
                'hideable ' + (context.state.do_like_enabled ? '' : 'hidden')
              }
            />
            <CommentSettings
              className={
                'hideable ' + (context.state.do_comment_enabled ? '' : 'hidden')
              }
            />
            <FollowSettings
              className={
                'hideable ' + (context.state.do_follow_enabled ? '' : 'hidden')
              }
            />
            <UnfollowSettings
              className={
                'hideable ' + (context.state.enable_unfollow ? '' : 'hidden')
              }
            />
            {/*<MessageSettings*/}
            {/*className={*/}
            {/*'hideable ' + (context.state.enable_message ? '' : 'hidden')*/}
            {/*}*/}
            {/*/>*/}
            <ActivitySettings />
            <Save />
          </div>
        )}
      </Context.Consumer>
    );
  }
}
