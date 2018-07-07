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
                  'hideable ' + (context.state.enable_like ? '' : 'hidden')
                }
              />
              <CommentSettings
                className={
                  'hideable ' + (context.state.enable_comment ? '' : 'hidden')
                }
              />
              <FollowSettings
                className={
                  'hideable ' + (context.state.enable_follow ? '' : 'hidden')
                }
              />
              <UnfollowSettings
                className={
                  'hideable ' + (context.state.enable_unfollow ? '' : 'hidden')
                }
              />
              {/*<MessageSettings />*/}
              <ActivitySettings />

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
