import React, { Component } from 'react';
import trash from './images/Tash-Sultana.jpg';

export default class MessageSettings extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1 className="titlepage">Messages</h1>
        </div>
        <div className="body">
          <div className="form-block w-form form">
            <div className="titleholder">
              <div
                data-w-id="fec30446-822d-8701-a7f2-5c2390851734"
                className="switch_general_settings title"
              >
                <div className="switch_circle_general" />
                <div className="switch_circle_off_general" />
              </div>
              <label htmlFor="email" className="settingtitle">
                Define message when someone follows you
              </label>
              <div className="helptext">
                Choose successful profiles which are similar to yours.{' '}
                <span className="helptext_secondary">
                  So you get attention from profiles which are interested in
                  your content.
                </span>
              </div>
            </div>
            <div className="titleholder">
              <div className="columnholder applied_hashtasgs_and_locations">
                <div className="applied_hashtag_or_location long">
                  <div className="classicon">
                    <div className="commenticon" />
                  </div>
                  <div className="hashtag_or_location_text">
                    Hey @username🤓 Happy to connect to you. I do click funnels.
                    So in case this is something you&#x27;re interested in, ask
                    me anything. I love the dialogue.
                  </div>
                  <div className="deletebutton">
                    <div className="xicon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="columnholder hashtag_settings_holder messages">
              <input
                type="text"
                className="text-field broadfield w-input"
                maxLength="256"
                name="field-4"
                data-name="Field 4"
                placeholder="Type in message, press enter"
                data-w-id="16d1e464-e4bb-0e4e-90d7-1e158b2496bf"
                id="field-4"
              />
              <div className="suggestions">
                <div className="suggestion_text_hashtags">#abs</div>
                <div className="suggestion_text_hashtags">#gymrat</div>
                <div className="suggestion_text_hashtags">#fitnessworkout</div>
                <div className="suggestion_text_hashtags">#hashtag</div>
                <div className="suggestion_text_hashtags">#deinemudda</div>
              </div>
            </div>
            <div className="columnholder user follower firstmessage">
              <img src={trash} className="messageimage" />
              <div className="deletebutton removeimage">
                <div className="xicon" />
              </div>
            </div>
            <button className="submitbutton upload w-button">Add image</button>
          </div>
        </div>
      </div>
    );
  }
}
