import React, { Component } from 'react';
import './css/webflow.css';
import './css/normalize.css';
import './css/code-connect.webflow.css';
import Progress from './ProgressBar';
import NavBar from './NavBar';
import GeneralSettings from './GeneralSettings';
import LikeSettings from './LikeSettings';
import CommentSettings from './CommentSettings';
import FollowSettings from './FollowSettings';
import UnfollowSettings from './UnfollowSettings';
import MessageSettings from './MessageSettings';
import ActivitySettings from './ActivitySettings';
import { Context, Provider } from './Context';
import Save from './Save';

export default class App extends Component {
  render() {
    return (
      <Provider>
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
                  'hideable ' +
                  (context.state.do_comment_enabled ? '' : 'hidden')
                }
              />
              <FollowSettings
                className={
                  'hideable ' +
                  (context.state.do_follow_enabled ? '' : 'hidden')
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

              <div className="success-message w-form-done">
                <div className="text-block">
                  Thank you! Your submission has been received!
                </div>
              </div>
              <div className="error-message w-form-fail">
                <div className="text-block-2">
                  Oops! Something went wrong while submitting the form.
                </div>
              </div>
            </div>
          )}
        </Context.Consumer>
      </Provider>
    );
  }
}
