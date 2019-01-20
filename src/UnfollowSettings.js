import React, { Component } from 'react';
import TextFieldNumber from './TextFieldNumber';
import ContextSwitch from './ContextSwitch';
import Help from './Help';
import './css/settings.css';

export default class UnfollowSettings extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="header">
          <h1 className="titlepage unfollowunderline">Unfollows</h1>
        </div>
        <div className="body">
          <div className="w-form form">
            <div className="titleholder">
              <div className="settingtitle">Only unfollow nonfollowers</div>
              <ContextSwitch
                value="unfollow_users_nonfollowers"
                className="title"
              />
              <Help>
                <strong>Unfollow: </strong>
                <br />
                To keep your amount of followings low you should unfollow users
                from time to time. <br />
                Recommendation: after 2 - 3 days.
              </Help>
            </div>
            <TextFieldNumber
              value="unfollow_users_unfollow_after"
              placeholder="unfollow after X days"
              min={1}
            />
            <div className="unfollowdisclaimer">
              We do not unfollow users you followed manually.{' '}
              <span className="helptext_secondary">
                We only unfollows users the bot previously followed.
              </span>
            </div>
            {/*<div className="w-row">*/}
            {/*<div className="column-2 w-col w-col-4">*/}
            {/*<div className="text-field filter followfilter w-checkbox">*/}
            {/*<input*/}
            {/*type="checkbox"*/}
            {/*id="checkbox-3"*/}
            {/*name="checkbox-3"*/}
            {/*data-name="Checkbox 3"*/}
            {/*className="checkbox-2 w-checkbox-input"*/}
            {/*/>*/}
            {/*<label*/}
            {/*htmlFor="checkbox-4"*/}
            {/*className="fieldlabel w-form-label"*/}
            {/*>*/}
            {/*Unfollow if user doesn&#x27;t follow back*/}
            {/*</label>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<div className="column-4 w-col w-col-8">*/}
            {/*<div className="columnholder belowholder columns">*/}
            {/*<div className="text_field_description below">*/}
            {/*After X days*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<input*/}
            {/*type="text"*/}
            {/*maxLength="256"*/}
            {/*name="field-3"*/}
            {/*data-name="Field 3"*/}
            {/*id="field-3"*/}
            {/*className="text-field filter unfollowsettings w-input"*/}
            {/*/>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<div className="w-row">*/}
            {/*<div className="column w-col w-col-4">*/}
            {/*<div className="text-field filter followfilter w-checkbox">*/}
            {/*<input*/}
            {/*type="checkbox"*/}
            {/*id="checkbox-3"*/}
            {/*name="checkbox-3"*/}
            {/*data-name="Checkbox 3"*/}
            {/*className="checkbox-2 w-checkbox-input"*/}
            {/*/>*/}
            {/*<label*/}
            {/*htmlFor="checkbox-4"*/}
            {/*className="fieldlabel w-form-label"*/}
            {/*>*/}
            {/*Unfollow when user follows back*/}
            {/*</label>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<div className="column-3 w-col w-col-8">*/}
            {/*<div className="columnholder belowholder columns">*/}
            {/*<div className="text_field_description below">*/}
            {/*After Y hours*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<input*/}
            {/*type="text"*/}
            {/*maxLength="256"*/}
            {/*name="field-3"*/}
            {/*data-name="Field 3"*/}
            {/*id="field-3"*/}
            {/*className="text-field filter unfollowsettings w-input"*/}
            {/*/>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<div className="columnholder unfollow">*/}
            {/*<div className="text-field filter followfilter last w-checkbox">*/}
            {/*<input*/}
            {/*type="checkbox"*/}
            {/*id="checkbox-3"*/}
            {/*name="checkbox-3"*/}
            {/*data-name="Checkbox 3"*/}
            {/*className="checkbox-2 w-checkbox-input"*/}
            {/*/>*/}
            {/*<label*/}
            {/*htmlFor="checkbox-4"*/}
            {/*className="fieldlabel w-form-label"*/}
            {/*>*/}
            {/*Don&#x27;t unfollow users following back*/}
            {/*</label>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<div className="titleholder">*/}
            {/*<label htmlFor="email" className="settingtitle">*/}
            {/*Filters*/}
            {/*</label>*/}
            {/*<div className="helptext">*/}
            {/*<strong>Filters:</strong> How many accounts are to be*/}
            {/*unfollowed?{' '}*/}
            {/*<span className="helptext_tertiary">*/}
            {/*General min-max unfollows recommendation: 100-200 for*/}
            {/*accounts less than 6 months old, 200-400 for 6-18 months old*/}
            {/*accounts, 300-600 for accounts older than 18 months*/}
            {/*</span>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<div className="columnholder filterholder">*/}
            {/*<input*/}
            {/*type="text"*/}
            {/*maxLength="256"*/}
            {/*name="field-3"*/}
            {/*data-name="Field 3"*/}
            {/*id="field-3"*/}
            {/*className="text-field filter last w-input"*/}
            {/*/>*/}
            {/*<div className="columnholder belowholder">*/}
            {/*<div className="text_field_description below">*/}
            {/*Min-max unfollows per day*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    );
  }
}
