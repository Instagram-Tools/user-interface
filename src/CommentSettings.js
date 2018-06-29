import React, { Component } from 'react';

export default class CommentSettings extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1 className="titlepage">Comments</h1>
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
                  data-w-id="bfcd2e97-f8e9-f02f-1147-c1b140bbb62b"
                  className="switch_general_settings title"
                >
                  <div className="switch_circle_general" />
                  <div className="switch_circle_off_general" />
                </div>
                <label htmlFor="email" className="settingtitle">
                  Comment pictures with a hashtag
                </label>
                <div className="helptext">
                  <strong>Comment pictures with a hashtag: </strong>Choose
                  hashtags your target group could be interested in.{' '}
                  <span className="helptext_secondary">
                    NotInstagress will comment pictures with these hashtags.
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
                    data-w-id="bfcd2e97-f8e9-f02f-1147-c1b140bbb641"
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
                  data-w-id="bfcd2e97-f8e9-f02f-1147-c1b140bbb64e"
                  className="switch_general_settings title"
                >
                  <div className="switch_circle_general" />
                  <div className="switch_circle_off_general" />
                </div>
                <label htmlFor="email" className="settingtitle">
                  Comment pictures posted in a location
                </label>
                <div className="helptext">
                  <strong>Comment pictures from a location: </strong>Choose
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
                  data-w-id="bfcd2e97-f8e9-f02f-1147-c1b140bbb663"
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
                  data-w-id="bfcd2e97-f8e9-f02f-1147-c1b140bbb670"
                  className="switch_general_settings title"
                >
                  <div className="switch_circle_general" />
                  <div className="switch_circle_off_general" />
                </div>
                <label htmlFor="email" className="settingtitle">
                  Comment<strong> </strong>pictures of a user&#x27;s followers
                </label>
                <div className="helptext">
                  <strong>Comment pictures of a user&#x27;s followers: </strong>Choose
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
                    data-w-id="e689958e-f55c-445a-948a-5294be5e0379"
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
                      Pick their last min-max followers
                    </div>
                    <div className="text_field_description below">
                      Comment their last min-max pictures
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
                  Define comments
                </label>
                <div className="helptext">
                  <strong>Define comments: </strong>Type in at least 5 different
                  ways NotInstagress will randomly choose from when it comments
                  user&#x27;s pictures.{' '}
                  <span className="helptext_secondary">
                    Keep it general, e.g. &quot;amazing picture :)“, &quot;thats
                    what i call a cool shot!“, &quot;nice one!“
                  </span>
                </div>
              </div>
              <div className="titleholder">
                <div className="columnholder applied_hashtasgs_and_locations">
                  <div className="applied_hashtag_or_location">
                    <div className="classicon">
                      <div className="commenticon" />
                    </div>
                    <div className="hashtag_or_location_text">
                      Amazing content😎
                    </div>
                    <div className="deletebutton">
                      <div className="xicon" />
                    </div>
                  </div>
                  <div className="applied_hashtag_or_location">
                    <div className="classicon">
                      <div className="commenticon" />
                    </div>
                    <div className="hashtag_or_location_text">Much love❤️</div>
                    <div className="deletebutton">
                      <div className="xicon" />
                    </div>
                  </div>
                  <div className="applied_hashtag_or_location">
                    <div className="classicon">
                      <div className="commenticon" />
                    </div>
                    <div className="hashtag_or_location_text">Inspiring</div>
                    <div className="deletebutton">
                      <div className="xicon" />
                    </div>
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
                  placeholder="Type in comment, press enter"
                  data-w-id="daa3c27d-db2c-41d8-a9f0-383b735d45cb"
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
              <div className="titleholder like_pictures_from_feed">
                <div
                  data-w-id="bfcd2e97-f8e9-f02f-1147-c1b140bbb69c"
                  className="switch_general_settings title"
                >
                  <div className="switch_circle_general" />
                  <div className="switch_circle_off_general" />
                </div>
                <label htmlFor="email" className="settingtitle">
                  {' '}
                  Comment pictures from my feed
                </label>
                <div className="helptext">
                  <strong>Comment pictures from my feed: </strong>Comments a
                  random amount of pictures from people you are already
                  following.{' '}
                  <span className="helptext_secondary">
                    That way, you keep your community engaged. NotInstagress
                    would comment X% of all the pictures it comments.
                  </span>
                </div>
              </div>
              <div className="titleholder">
                <label htmlFor="email" className="settingtitle">
                  <strong>Filters:</strong> Comment pictures with...
                </label>
                <div className="helptext">
                  <strong>Filters: Comment pictures with...: </strong>Which
                  pictures are to be commented?{' '}
                  <span className="helptext_secondary">
                    Pictures/accounts with little engagement tend to too
                    inactive. If they have very much though,
                    NotInstagress&#x27;s efforts tend to go under.{' '}
                  </span>
                  <span className="helptext_tertiary">
                    General recommendation: 10-300 likes, 0-50 comments,
                    100-2000 followers, 0-5 days; Max comments per day: 50-200
                    for accounts less than 6 months old, 200-400 for 6-18 months
                    old accounts, 300-500 for accounts older than 18 months
                  </span>
                </div>
              </div>
              <div className="columnholder filterholder first">
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
                    Min-max likes
                  </div>
                  <div className="text_field_description below">
                    Min-max comments
                  </div>
                  <div className="text_field_description below">
                    Min-max followers
                  </div>
                  <div className="text_field_description below">
                    Min-max age in days
                  </div>
                  <div className="text_field_description below">
                    Min-max comments per day
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
