import React, { Component } from 'react';
import './css/webflow.css';
import './css/normalize.css';
import './css/code-connect.webflow.css';
import NavBar from './NavBar';
import GeneralSettings from './GeneralSettings';
import LikeSettings from './LikeSettings';
import CommentSettings from './CommentSettings';
import FollowSettings from './FollowSettings';
import UnfollowSettings from './UnfollowSettings';
import MessageSettings from './MessageSettings';
import ActivitySettings from './ActivitySettings';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <GeneralSettings />
        <LikeSettings />
        <CommentSettings />
        <FollowSettings />
        <UnfollowSettings />
        <MessageSettings />
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
    );
  }
}

export default App;
