import React, { Component } from 'react';
import Switch from './ContextSwitch';
import TextFieldNumber from './TextFieldNumber';
import Help from './Help';
import TextFieldHashtags from './TextField_Hashtags';
import TextFieldUsers from './TextField_Users';
import TextFieldPlaces from './TextField_Places';
import SwitchSpeed from './SwitchSpeed';

export default class GeneralSettings extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1 className="titlepage generalunderline">General</h1>
        </div>
        <div data-w-id="885ad75b-5927-d36b-7821-9522271a2279" className="body">
          <div className="w-form form">
            <div className="titleholder interactionsholder">
              <Help className="helptext">
                <strong>Speed: </strong>Defines interaction rate/speed. <br />
                slow: for new accounts younger than 6 months<br />
                medium: for accounts between 6 and 18 months<br />
                fast: for accounts older than 18 months
              </Help>
              <label className="settingtitle speedttitle">
                Interactions speed
              </label>
              <SwitchSpeed value="speed" />
            </div>
            <div className="titleholder right_padding_5vw">
              <Switch value="enable_like_by_tags" className="title" />
              <Help className="helptext">
                <strong>Relevant Hashtags: </strong>Choose hashtags your target
                group could be interested in.{' '}
                <span className="helptext_secondary">
                  PinkParrot will interact with pictures including these
                  hashtags.{' '}
                </span>
              </Help>
              <label htmlFor="email" className="settingtitle interfacetitle">
                Relevant Hashtags
              </label>
            </div>
            <div
              data-w-id="1846180f-b0c1-4f62-a33b-df4641310d47"
              className="settingsgroup"
            >
              <TextFieldHashtags
                value="like_by_tags"
                label="Enter hashtags this way: fitness"
              />
            </div>
            <div className="titleholder right_padding_5vw">
              <Switch value="enable_like_by_locations" className="title" />
              <Help>
                <strong>Relevant Locations: </strong>Choose locations where you
                want to interact with users to get their attention.{' '}
                <span className="helptext_secondary">
                  E.g. &quot;England, Munich, Frankfurt Airport, Berlin, etc.
                  &quot;.
                </span>
              </Help>
              <label htmlFor="email" className="settingtitle">
                Relevant Locations
              </label>
            </div>
            <TextFieldPlaces
              value="like_by_locations"
              label="Search for locations"
            />
            <div className="titleholder right_padding_5vw">
              <Switch value="enable_follow_user_followers" className="title" />
              <Help className="helptext">
                <strong>Interact with user&#x27;s followers: </strong>Choose
                successful profiles which are similar to yours.{' '}
                <span className="helptext_secondary">
                  So you get attention from profiles which are interested in
                  your content.
                </span>
              </Help>
              <label htmlFor="email" className="settingtitle">
                Relevant Users
              </label>
            </div>
            <div className="columnholder hashtag_settings_holder">
              <TextFieldUsers
                value="follow_user_followers"
                label="Search for user"
              />
              <div className="titleholder">
                <Help className="helptext">
                  <strong>Define your target group: </strong> <br />
                  Recommendation: <br />
                  Pick last 5 - 10 Followers of the selected Profile<br />
                  Profiles with 100 - 3000 Followers <br />
                  Profiles following 30 - 1000 Users <br />
                  Interact with last 1 - 5 pictures
                </Help>
                <label htmlFor="email" className="settingtitle">
                  Filters: What users to interact with?
                </label>
              </div>
              <div className="columnholder filterholder first">
                <TextFieldNumber
                  label="Must have min X Followers"
                  value="relationship_bounds_min_followers"
                />
                <TextFieldNumber
                  label="Must have max Y Followers"
                  value="relationship_bounds_max_followers"
                />
              </div>
              <div className="columnholder filterholder first">
                <TextFieldNumber
                  label="Must follow min X users"
                  value="relationship_bounds_min_following"
                />
                <TextFieldNumber
                  label="Must follow max Y users"
                  value="relationship_bounds_max_following"
                />
              </div>
              <TextFieldNumber
                label="Interact with their last Z pictures"
                value="user_interact_amount"
              />
            </div>

            <div className="titleholder right_padding_5vw">
              <Switch value="enable_interact_by_comments" className="title" />
              <Help className="helptext">
                Like comments in your defined target group and interact with the
                commentator
              </Help>
              <label htmlFor="email" className="settingtitle">
                Interact with Comments on Relevant Users’ posts
              </label>
            </div>

            <div className="titleholder like_pictures_from_feed">
              <Switch value="enable_like_by_feed" className="title" />
              <Help className="helptext">
                <strong>Interact with pictures from my feed: </strong>
                Interact with people you are already following.{' '}
                <span className="helptext_secondary">
                  That way, you keep your community engaged.
                </span>
              </Help>
              <label htmlFor="email" className="settingtitle">
                Interact with pictures from my feed
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
