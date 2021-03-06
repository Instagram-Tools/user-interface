import React, { Component } from 'react';
import Progress from './ProgressBar';
import Sections from './Sections';
import GeneralSettings from './GeneralSettings';
import LikeSettings from './LikeSettings';
import CommentSettings from './CommentSettings';
import UnfollowSettings from './UnfollowSettings';
import ActivitySettings from './ActivitySettings';
import { Context } from './Context';
import Save from './Save';

export default class App extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <div className={this.props.className} style={this.props.style}>
            <div className="menu_bar_whitener" />
            <Progress />
            <Sections />
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
            <UnfollowSettings
              className={
                'hideable ' + (context.state.enable_unfollow ? '' : 'hidden')
              }
            />
            <ActivitySettings />
            <Save />
          </div>
        )}
      </Context.Consumer>
    );
  }
}
