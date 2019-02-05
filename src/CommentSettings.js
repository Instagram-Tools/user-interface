import React, { Component } from 'react';
import TextFieldNumber from './TextFieldNumber';
import TextFieldComments from './TextFieldComments';
import Help from './Help';
import './css/settings.css';

export default class CommentSettings extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="header">
          <h1 className="titlepage commentunderline">Comments</h1>
        </div>
        <div className="body">
          <div className="w-form form">
            <div className="titleholder">
              <Help>
                <strong>Comment X percent of crawled pictures: </strong> <br />
                100% means every crawled picture will be commented. <br />
                50% means every second crawled picture will be commented.
              </Help>
              <label htmlFor="email" className="settingtitle">
                Comment Percentage
              </label>
            </div>
            <TextFieldNumber
              placeholder="Comment Percentage %"
              max={100}
              value="do_comment_percentage"
            />

            <TextFieldComments
              value="comments"
              placeholder="Enter Text you want to comment."
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
              <Help className="helptext">
                <strong>Comment pictures with...: </strong>
                <br />
                Which pictures do you want to comment? <br />
                Set minimum and maximum amount of comments a picture has you
                want to interact with. <br />
                Pictures with big engagement are not perfect to gain attention
                as your interaction will be one of many.<br />
                <span className="helptext_secondary">
                  Recommendation: 0 - 40 comments per picture.{' '}
                </span>
                <span className="helptext_tertiary" />
              </Help>
              <label htmlFor="email" className="settingtitle">
                Filters: Comment pictures with...
              </label>
            </div>
            <div className="columnholder filterholder first">
              <TextFieldNumber
                placeholder="Min Comments"
                value="delimit_commenting_min"
              />
              <TextFieldNumber
                placeholder="Max Comments"
                value="delimit_commenting_max"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
