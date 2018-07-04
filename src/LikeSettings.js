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
                <label htmlFor="email" className="settingtitle">
                  Like Percentage
                </label>
                <div
                  style={{ position: 'unset' }}
                  className="settingtitle helpcircle "
                >
                  ?
                </div>
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
              <TextFieldNumber
                placeholder="Like Percentage %"
                max={100}
                value="do_like_percentage"
              />
              <div className="titleholder">
                <label htmlFor="email" className="settingtitle">
                  <strong>Filters:</strong> Like pictures with...
                </label>
                <div
                  style={{ position: 'unset' }}
                  className="settingtitle helpcircle "
                >
                  ?
                </div>
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
