import React, { Component } from 'react';
import Switch from './ContextSwitch';
import TextFieldNumber from './TextFieldNumber';
import Help from './Help';
import TextFieldHashtags from './TextField_Hashtags';
import TextFieldUsers from './TextField_Users';
import TextFieldPlaces from './TextField_Places';
import SwitchSpeed from './SwitchSpeed';

export default class GeneralInfo extends Component {
  render() {
    return (
      <div className="generalinfo">
        <div className="general_settings subtitle generaltutorial w-clearfix">
          <span className="infoicon"> </span>Define your target group via{' '}
          <span className="generaltutorial_ha">General</span> and when Pink
          Parrot shall be active via{' '}
          <span className="activitytutorial">Activity</span>.{' '}
          <span>
            <strong className="secondarytutorial">
              {' '}
              Pink Parrot will then check out accounts from your target group in
              the background. It will engage via<br />{' '}
            </strong>
          </span>
          <strong className="secondarytutorial likestutorial">Likes</strong>
          <span>
            <strong className="secondarytutorial">, </strong>
          </span>
          <strong className="secondarytutorial commentstutorial">
            Comments
          </strong>
          <span>
            <strong className="secondarytutorial">, </strong>
          </span>
          <strong className="secondarytutorial followstutorial">Follows</strong>
          <span>
            <strong className="secondarytutorial">, </strong>
          </span>
          <strong className="secondarytutorial unfollowstutorial">
            Unfollows
          </strong>
          <span>
            <strong className="secondarytutorial"> and </strong>
          </span>
          <strong className="secondarytutorial messagestutorial">
            Messages
          </strong>
          <span>
            <strong className="secondarytutorial">
              , liking/commenting/... the percentage of accounts it checked out
              you've typed in (if there is one) to mimic human behaviour.
            </strong>
          </span>
        </div>
      </div>
    );
  }
}
