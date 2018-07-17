import React, { Component } from 'react';
import Switch from './ContextSwitch';
import TextFieldBroad from './TextFieldBroad';
import TextFieldNumber from './TextFieldNumber';
import ContextList from './ContextList';
import Help from './Help';

export default class GeneralSettings extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1 className="titlepage">General</h1>
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
                <label htmlFor="email" className="settingtitle">
                  Relevant Hashtags
                </label>
                <Switch value="enable_like_by_tags" className="title" />
                <Help className="helptext">
                  <strong>Relevant Hashtags: </strong>Choose hashtags your
                  target group could be interested in.{' '}
                  <span className="helptext_secondary">
                    PinkParrot will interact with pictures including these
                    hashtags.{' '}
                  </span>
                </Help>
              </div>
              <div
                data-w-id="1846180f-b0c1-4f62-a33b-df4641310d47"
                className="settingsgroup"
              >
                <ContextList value="like_by_tags" iconClass="hashtagicon" />
                <div className="columnholder hashtag_settings_holder">
                  <TextFieldBroad
                    value="like_by_tags"
                    query="hashtags"
                    placeholder="Enter hashtags this way: fitness"
                  />
                </div>
              </div>
              <div className="titleholder">
                <label htmlFor="email" className="settingtitle">
                  Relevant Locations
                </label>
                <Switch value="enable_like_by_locations" className="title" />
                <Help>
                  <strong>Relevant Locations: </strong>Choose locations where
                  you want to interact with users to get their attention.{' '}
                  <span className="helptext_secondary">
                    E.g. &quot;England, Munich, Frankfurt Airport, Berlin, etc.
                    &quot;.
                  </span>
                </Help>
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
                <label htmlFor="email" className="settingtitle">
                  Relevant Users
                </label>
                <Switch
                  value="enable_follow_user_followers"
                  className="title"
                />
                <Help className="helptext">
                  <strong>
                    Interact with pictures of a user&#x27;s followers:{' '}
                  </strong>Choose successful profiles which are similar to
                  yours.{' '}
                  <span className="helptext_secondary">
                    So you get attention from profiles which are interested in
                    your content.
                  </span>
                </Help>
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

                <div className="titleholder">
                  <label
                    style={{ fontSize: '1.4em', fontWeight: '400' }}
                    htmlFor="email"
                    className="settingtitle"
                  >
                    Relevant Users Filters
                  </label>
                  <Help className="helptext">
                    <strong>Filter Users you want to interact with</strong>
                  </Help>

                  <div className="columnholder filterholder first">
                    <TextFieldNumber
                      placeholder="Pick your user's last X followers"
                      value="follow_user_followers_amount"
                    />
                  </div>

                  <div className="columnholder filterholder first">
                    <TextFieldNumber
                      placeholder="... having min X Followers"
                      value="relationship_bounds_min_followers"
                    />
                    <TextFieldNumber
                      placeholder="... having max Y Followers"
                      value="relationship_bounds_max_followers"
                    />
                    <TextFieldNumber
                      placeholder="... following min X users"
                      value="relationship_bounds_min_following"
                    />
                    <TextFieldNumber
                      placeholder="... following max Y users"
                      value="relationship_bounds_max_following"
                    />
                  </div>
                  <TextFieldNumber
                    placeholder="Interact with their last Z pictures"
                    value="user_interact_amount"
                  />
                </div>
              </div>
              <div className="titleholder like_pictures_from_feed">
                <label htmlFor="email" className="settingtitle">
                  Interact with pictures from my feed
                </label>
                <Switch value="enable_like_by_feed" className="title" />
                <Help className="helptext">
                  <strong>Interact with pictures from my feed: </strong>
                  Interact with people you are already following.{' '}
                  <span className="helptext_secondary">
                    That way, you keep your community engaged.
                  </span>
                </Help>
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
