import React, { Component } from 'react';

export default class FollowSettings extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1 className="titlepage">Follows</h1>
        </div>
        <div className="body">
          <div className="w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              className="form"
            >
              <div className="titleholder">
                <div
                  data-w-id="69eea323-0b05-1c6f-89d9-3ba27b23552d"
                  className="switch_general_settings title"
                >
                  <div className="switch_circle_general" />
                  <div className="switch_circle_off_general" />
                </div>
                <label htmlFor="email" className="settingtitle">
                  Follow accounts that posted pictures with a hashtag
                </label>
                <div className="helptext">
                  <strong>
                    Follow accounts that posted pictures with a hashtag:{' '}
                  </strong>Choose hashtags your target group could be interested
                  in.{' '}
                  <span className="helptext_secondary">
                    NotInstagress will follow accounts having posted pictures
                    with these hashtags.
                  </span>
                </div>
              </div>
              <div className="settingsgroup">
                <div className="columnholder applied_hashtasgs_and_locations">
                  <div className="applied_hashtag_or_location">
                    <div className="classicon">
                      <div className="hashtagicon" />
                    </div>
                    <div className="hashtag_or_location_text">
                      fitness workout
                    </div>
                    <div className="deletebutton">
                      <div className="xicon" />
                    </div>
                  </div>
                  <div className="applied_hashtag_or_location">
                    <div className="classicon">
                      <div className="hashtagicon" />
                    </div>
                    <div className="hashtag_or_location_text">abs</div>
                    <div className="deletebutton">
                      <div className="xicon" />
                    </div>
                  </div>
                </div>
                <div className="columnholder hashtag_settings_holder">
                  <input
                    type="text"
                    className="text-field broadfield w-input"
                    maxLength="256"
                    name="field-4"
                    data-name="Field 4"
                    placeholder="Enter hashtags this way: #fitness #workout #..."
                    data-w-id="69eea323-0b05-1c6f-89d9-3ba27b235543"
                    id="field-4"
                    required=""
                  />
                  <div className="suggestions">
                    <div className="suggestion_text_hashtags">#abs</div>
                    <div className="suggestion_text_hashtags">#gymrat</div>
                    <div className="suggestion_text_hashtags">
                      #fitnessworkout
                    </div>
                    <div className="suggestion_text_hashtags">#hashtag</div>
                    <div className="suggestion_text_hashtags">#deinemudda</div>
                  </div>
                </div>
              </div>
              <div className="titleholder">
                <div
                  data-w-id="69eea323-0b05-1c6f-89d9-3ba27b235550"
                  className="switch_general_settings title"
                >
                  <div className="switch_circle_general" />
                  <div className="switch_circle_off_general" />
                </div>
                <label htmlFor="email" className="settingtitle">
                  Follow pictures posted in a location
                </label>
                <div className="helptext">
                  <strong>Follow pictures from a location: </strong>Choose
                  locations where you want to interact with users.{' '}
                  <span className="helptext_secondary">
                    E.g. &quot;England, Munich, Frankfurt Airport&quot;.
                  </span>
                </div>
              </div>
              <div className="columnholder applied_hashtasgs_and_locations">
                <div className="applied_hashtag_or_location">
                  <div className="classicon">
                    <div className="locationicon" />
                  </div>
                  <div className="hashtag_or_location_text">Munich</div>
                  <div className="deletebutton">
                    <div className="xicon" />
                  </div>
                </div>
                <div className="applied_hashtag_or_location">
                  <div className="classicon">
                    <div className="locationicon" />
                  </div>
                  <div className="hashtag_or_location_text">London</div>
                  <div className="deletebutton">
                    <div className="xicon" />
                  </div>
                </div>
              </div>
              <div className="columnholder hashtag_settings_holder">
                <input
                  type="text"
                  className="text-field broadfield w-input"
                  maxLength="256"
                  name="field-5"
                  data-name="Field 5"
                  placeholder="Search for locations"
                  data-w-id="69eea323-0b05-1c6f-89d9-3ba27b235565"
                  id="field-5"
                  required=""
                />
                <div className="suggestions">
                  <div className="suggestion_text_locations">Munich</div>
                  <div className="suggestion_text_locations">London</div>
                  <div className="suggestion_text_locations">Timbuktu</div>
                  <div className="suggestion_text_locations">Aachen</div>
                  <div className="suggestion_text_locations">Bielefeld</div>
                </div>
              </div>
              <div className="titleholder">
                <div
                  data-w-id="69eea323-0b05-1c6f-89d9-3ba27b235572"
                  className="switch_general_settings title"
                >
                  <div className="switch_circle_general" />
                  <div className="switch_circle_off_general" />
                </div>
                <label htmlFor="email" className="settingtitle">
                  Follow a user
                </label>
                <div className="helptext">
                  <strong>Follow a user&#x27;s followers: </strong>Choose
                  successful profiles which are similar to yours.{' '}
                  <span className="helptext_secondary">
                    So you get attention from profiles which are interested in
                    your content.
                  </span>
                </div>
              </div>
              <div className="columnholder applied_hashtasgs_and_locations">
                <div className="applied_hashtag_or_location">
                  <div className="classicon">
                    <div className="usericon" />
                  </div>
                  <div className="hashtag_or_location_text">
                    Alex.Bosch.Unofficial
                  </div>
                  <div className="deletebutton">
                    <div className="xicon" />
                  </div>
                </div>
                <div className="applied_hashtag_or_location">
                  <div className="classicon">
                    <div className="usericon" />
                  </div>
                  <div className="hashtag_or_location_text">SvenSilver</div>
                  <div className="deletebutton">
                    <div className="xicon" />
                  </div>
                </div>
                <div className="applied_hashtag_or_location">
                  <div className="classicon">
                    <div className="usericon" />
                  </div>
                  <div className="hashtag_or_location_text">I bims</div>
                  <div className="deletebutton">
                    <div className="xicon" />
                  </div>
                </div>
              </div>
              <div className="columnholder hashtag_settings_holder">
                <div className="columnholder user">
                  <input
                    type="text"
                    className="text-field broadfield w-input"
                    maxLength="256"
                    name="field-5"
                    data-name="Field 5"
                    placeholder="Search for user"
                    data-w-id="8e15ffc9-b1c1-8f9e-2db1-15448b0a1dbb"
                    id="field-5"
                    required=""
                  />
                </div>
                <div className="columnholder filterholder first">
                  <input
                    type="text"
                    maxLength="256"
                    name="field-3"
                    data-name="Field 3"
                    id="field-3"
                    className="text-field filter last w-input"
                  />
                  <div className="columnholder belowholder">
                    <div className="text_field_description below">
                      Follow their last min-max followers
                    </div>
                  </div>
                </div>
                <div className="suggestions">
                  <div className="suggestion_text_users">Blyat.Official</div>
                  <div className="suggestion_text_users">HalloNein</div>
                  <div className="suggestion_text_users">Miss.S</div>
                  <div className="suggestion_text_users">Draufganger</div>
                  <div className="suggestion_text_users">
                    Christopher.Hates.Official
                  </div>
                </div>
              </div>
              <div className="titleholder">
                <label htmlFor="email" className="settingtitle">
                  Settings
                </label>
                <div className="helptext">
                  <strong>Settings:</strong> How shall NotInstagress interact
                  with special cases?<span className="helptext_secondary" />
                </div>
              </div>
              <div className="columnholder user follower">
                <div className="text-field filter followfilter w-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    data-name="Checkbox"
                    className="checkbox-3 w-checkbox-input"
                  />
                  <label htmlFor="checkbox" className="fieldlabel w-form-label">
                    Don&#x27;t follow previously followed users
                  </label>
                </div>
                <div className="text-field filter followfilter last w-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox-2"
                    name="checkbox-2"
                    data-name="Checkbox 2"
                    className="checkbox-4 w-checkbox-input"
                  />
                  <label
                    htmlFor="checkbox-2"
                    className="fieldlabel w-form-label"
                  >
                    Don&#x27;t follow private users
                  </label>
                </div>
              </div>
              <div className="titleholder">
                <label htmlFor="email" className="settingtitle">
                  <strong>Filters:</strong> Follow users with...
                </label>
                <div className="helptext">
                  <strong>Filters: Follow users with...:</strong> Which accounts
                  are to be followed?{' '}
                  <span className="helptext_secondary">
                    Pictures/accounts with little engagement tend to too
                    inactive. If they have very much though,
                    NotInstagress&#x27;s efforts tend to go under.{' '}
                  </span>
                  <span className="helptext_tertiary">
                    General recommendation: 100-2000 followers, 0-5 days; Max
                    follows per day: 100-200 for accounts less than 6 months
                    old, 200-400 for 6-18 months old accounts, 300-600 for
                    accounts older than 18 months
                  </span>
                </div>
              </div>
              <div className="columnholder filterholder">
                <input
                  type="text"
                  maxLength="256"
                  name="field-3"
                  data-name="Field 3"
                  id="field-3"
                  className="text-field filter w-input"
                />
                <input
                  type="text"
                  maxLength="256"
                  name="field-3"
                  data-name="Field 3"
                  id="field-3"
                  className="text-field filter w-input"
                />
                <input
                  type="text"
                  maxLength="256"
                  name="field-3"
                  data-name="Field 3"
                  id="field-3"
                  className="text-field filter last w-input"
                />
                <div className="columnholder belowholder">
                  <div className="text_field_description below">
                    Min-max followers
                  </div>
                  <div className="text_field_description below">
                    Last post in min-max days
                  </div>
                  <div className="text_field_description below">
                    Min-max follows per day
                  </div>
                </div>
              </div>
            </form>
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
        </div>
      </div>
    );
  }
}
