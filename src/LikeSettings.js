import React, { Component } from 'react';
import Switch from './ContextSwitch';
import TextFieldBroad from './TextFieldBroad';
import TextFieldNumber from './TextFieldNumber';
import ContextList from './ContextList';

export default class LikeSettings extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1 className="titlepage">Like</h1>
        </div>
        <div data-w-id="885ad75b-5927-d36b-7821-9522271a2279" className="body">
          <div className="w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              className="form"
            >
              <div className="titleholder">
                <Switch value="enable_like_by_tags" className="title" />
                <label htmlFor="email" className="settingtitle">
                  Like pictures with a hashtag
                </label>
                <div
                  data-w-id="b0691913-c1f9-0a64-2b3e-395827bc09b7"
                  className="helpcircle"
                >
                  ?
                </div>
                <div
                  data-w-id="231a78f1-f0eb-a53f-47ae-a59c6e7cd1c7"
                  className="helpcircle animationcircle"
                >
                  ?
                </div>
                <div
                  data-w-id="22c58d28-9a42-f414-7b98-09bcc5c05a9b"
                  className="helptext"
                >
                  <strong>Like pictures with a hashtag: </strong>Choose hashtags
                  your target group could be interested in.{' '}
                  <span className="helptext_secondary">
                    NotInstagress will like pictures with these hashtags.{' '}
                  </span>
                </div>
              </div>
              <div
                data-w-id="1846180f-b0c1-4f62-a33b-df4641310d47"
                className="settingsgroup"
              >
                <ContextList value="like_by_tags" iconClass="hashtagicon" />
                <div className="columnholder hashtag_settings_holder">
                  <TextFieldBroad
                    value="like_by_tags"
                    placeholder="Enter hashtags this way: fitness"
                  />
                  <div
                    data-w-id="034888e9-27da-288f-a156-1f16d12dae01"
                    className="suggestions"
                  >
                    <div className="suggestionscolumn">
                      <div className="suggestion_text_hashtags">#abs</div>
                      <div className="suggestion_text_hashtags">#gymrat</div>
                      <div className="suggestion_text_hashtags">
                        #fitnessworkout
                      </div>
                      <div className="suggestion_text_hashtags">#hashtag</div>
                      <div className="suggestion_text_hashtags">
                        #deinemudda
                      </div>
                    </div>
                    <div className="suggestionscolumn">
                      <div
                        data-w-id="27ba4687-69d1-9219-0c36-8ae82b546770"
                        className="amount_text_hashtags"
                      >
                        268.847.786 posts
                      </div>
                      <div className="amount_text_hashtags">
                        123.456.789 posts
                      </div>
                      <div className="amount_text_hashtags">
                        987.654.321 posts
                      </div>
                      <div className="amount_text_hashtags">
                        50.123.456 posts
                      </div>
                      <div className="amount_text_hashtags">
                        5.345.678 posts
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="titleholder">
                <Switch value="enable_like_by_locations" className="title" />
                <label htmlFor="email" className="settingtitle">
                  Like pictures posted in a location
                </label>
                <div className="helptext">
                  <strong>Like pictures from a location: </strong>Choose
                  locations where you want to interact with users.{' '}
                  <span className="helptext_secondary">
                    E.g. &quot;England, Munich, Frankfurt Airport&quot;.
                  </span>
                </div>
              </div>
              <ContextList value="like_by_locations" iconClass="locationicon" />
              <div className="columnholder hashtag_settings_holder">
                <TextFieldBroad
                  value="like_by_locations"
                  placeholder="Search for locations"
                />
                <div
                  data-w-id="82f677f9-6358-e7d6-c0d4-db9fcd52b646"
                  className="suggestions"
                >
                  <div className="suggestionscolumn">
                    <div
                      data-w-id="82f677f9-6358-e7d6-c0d4-db9fcd52b647"
                      className="suggestion_text_locations"
                    >
                      Munich
                    </div>
                    <div
                      data-w-id="82f677f9-6358-e7d6-c0d4-db9fcd52b649"
                      className="suggestion_text_locations"
                    >
                      London
                    </div>
                    <div className="suggestion_text_locations">Timbuktu</div>
                    <div className="suggestion_text_locations">Aachen</div>
                    <div className="suggestion_text_locations">Bielefeld</div>
                  </div>
                  <div className="suggestionscolumn">
                    <div
                      data-w-id="cd5101a4-aee0-c789-143b-b516a6947130"
                      className="amount_text_locations"
                    >
                      268.847.786 posts
                    </div>
                    <div
                      data-w-id="cd5101a4-aee0-c789-143b-b516a6947132"
                      className="amount_text_locations"
                    >
                      123.456.789 posts
                    </div>
                    <div className="amount_text_locations">
                      987.654.321 posts
                    </div>
                    <div className="amount_text_locations">
                      50.123.456 posts
                    </div>
                    <div className="amount_text_locations">5.345.678 posts</div>
                  </div>
                </div>
              </div>
              <div className="titleholder">
                <Switch
                  toggle="enable_follow_user_followers"
                  className="title"
                />
                <label htmlFor="email" className="settingtitle">
                  Like pictures of a user&#x27;s followers
                </label>
                <div className="helptext">
                  <strong>Like pictures of a user&#x27;s followers: </strong>Choose
                  successful profiles which are similar to yours.{' '}
                  <span className="helptext_secondary">
                    So you get attention from profiles which are interested in
                    your content.
                  </span>
                </div>
              </div>
              <ContextList value="follow_user_followers" iconClass="usericon" />
              <div className="columnholder hashtag_settings_holder">
                <div className="columnholder user">
                  <TextFieldBroad
                    value="follow_user_followers"
                    placeholder="Search for user"
                  />
                </div>
                <div
                  data-w-id="b8e914c5-d691-26ab-947e-755718a24fe2"
                  className="suggestions nosuggestions"
                >
                  <div
                    data-w-id="b8e914c5-d691-26ab-947e-755718a24fe3"
                    className="suggestion_text_users"
                  >
                    Blyat.Official
                  </div>
                  <div className="suggestion_text_users">HalloNein</div>
                  <div
                    data-w-id="b8e914c5-d691-26ab-947e-755718a24fe7"
                    className="suggestion_text_users"
                  >
                    Miss.S
                  </div>
                  <div className="suggestion_text_users">Draufganger</div>
                  <div className="suggestion_text_users">
                    Christopher.Hates.Official
                  </div>
                </div>
                <div className="columnholder filterholder first">
                  <TextFieldNumber
                    value="follow_user_followers_amount"
                    placeholder="Pick their last X followers"
                  />
                  <TextFieldNumber
                    value="user_interact_amount"
                    placeholder="Like their last X pictures"
                  />
                </div>
              </div>
              <div className="titleholder like_pictures_from_feed">
                <Switch value="enable_like_by_feed" className="title" />
                <label htmlFor="email" className="settingtitle">
                  Like pictures from my feed
                </label>
                <div className="helptext">
                  <strong>Like pictures from my feed: </strong>Likes a random
                  amount of pictures from people you are already following.{' '}
                  <span className="helptext_secondary">
                    That way, you keep your community engaged. NotInstagress
                    would like X% of all the pictures it likes.
                  </span>
                </div>
              </div>
              <div className="titleholder">
                <label htmlFor="email" className="settingtitle">
                  <strong>Filters:</strong> Like pictures with...
                </label>
                <div className="helptext">
                  <strong>Filters: Like pictures with...: </strong>Which
                  pictures are to be liked?{' '}
                  <span className="helptext_secondary">
                    Pictures/accounts with little engagement tend to too
                    inactive. If they have very much though,
                    NotInstagress&#x27;s efforts tend to go under.{' '}
                  </span>
                  <span className="helptext_tertiary">
                    General recommendation: 10-300 likes, 0-50 comments,
                    100-2000 followers, 0-5 days; Max likes per day: 200-500 for
                    accounts less than 6 months old, 500-1000 for 6-18 months
                    old accounts, 800-1500 for accounts older than 18 months
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
                    Min-max likes per day
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
