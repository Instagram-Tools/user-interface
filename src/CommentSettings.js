import React, { Component } from 'react';
import TextFieldNumber from './TextFieldNumber';
import TextFieldBroad from './TextFieldBroad';
import Help from './Help';
import './css/settings.css';

export default class CommentSettings extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="header">
          <h1 className="titlepage">Comments</h1>
        </div>
        <div className="body">
          <div className="w-form form">
            <div className="titleholder">
              <label htmlFor="email" className="settingtitle">
                Comment Percentage
              </label>
              <Help>
                <strong>Like pictures with a hashtag: </strong>Choose hashtags
                your target group could be interested in.{' '}
                <span className="helptext_secondary">
                  NotInstagress will like pictures with these hashtags.{' '}
                </span>
              </Help>
            </div>
            <TextFieldNumber
              placeholder="Like Percentage %"
              max={100}
              value="do_comment_percentage"
            />

            <TextFieldBroad
              value="comments"
              placeholder="Enter hashtags this way: fitness"
            />
            <div
              data-w-id="1846180f-b0c1-4f62-a33b-df4641310d47"
              className="settingsgroup"
            >
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
                  <div className="suggestion_text_hashtags">#deinemudda</div>
                </div>
                <div className="suggestionscolumn">
                  <div
                    data-w-id="27ba4687-69d1-9219-0c36-8ae82b546770"
                    className="amount_text_hashtags"
                  >
                    268.847.786 posts
                  </div>
                  <div className="amount_text_hashtags">123.456.789 posts</div>
                  <div className="amount_text_hashtags">987.654.321 posts</div>
                  <div className="amount_text_hashtags">50.123.456 posts</div>
                  <div className="amount_text_hashtags">5.345.678 posts</div>
                </div>
              </div>
            </div>
            <div className="titleholder">
              <label htmlFor="email" className="settingtitle">
                <strong>Filters:</strong> Comment pictures with...
              </label>
              <Help className="helptext">
                <strong>Filters: Comment pictures with...: </strong>Which
                pictures are to be commented?{' '}
                <span className="helptext_secondary">
                  Pictures/accounts with little engagement tend to too inactive.
                  If they have very much though, NotInstagress&#x27;s efforts
                  tend to go under.{' '}
                </span>
                <span className="helptext_tertiary">
                  General recommendation: 10-300 likes, 0-50 comments, 100-2000
                  followers, 0-5 days; Max comments per day: 50-200 for accounts
                  less than 6 months old, 200-400 for 6-18 months old accounts,
                  300-500 for accounts older than 18 months
                </span>
              </Help>
            </div>
            <div className="columnholder filterholder first">
              <TextFieldNumber
                placeholder="Min Comments"
                value="delimit_liking_min"
              />
              <TextFieldNumber
                placeholder="Max Comments"
                value="delimit_liking_max"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
