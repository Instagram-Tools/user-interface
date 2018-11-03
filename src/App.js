import React, { Component } from 'react';
import './css/normalize.css';
import './css/webflow.css';
import './css/code-connect.webflow.css';
import Progress from './ProgressBar';
import NavBar from './NavBar';
import GeneralSettings from './GeneralSettings';
import LikeSettings from './LikeSettings';
import CommentSettings from './CommentSettings';
import FollowSettings from './FollowSettings';
import UnfollowSettings from './UnfollowSettings';
// import MessageSettings from './MessageSettings';
import ActivitySettings from './ActivitySettings';
import { Context } from './Context';
import Save from './Save';
import Payment_Gateway from './Payment_Gateway';

export default class App extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <div>
            <Progress />
            <NavBar />
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
            {/*<MessageSettings />*/}
            <ActivitySettings />
            <Save />
          </div>
        )}
      </Context.Consumer>
    );
  }
}
