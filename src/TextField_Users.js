import React from 'react';
import TextFieldSuggestion from './TextFieldSuggestion';

export default class TextField_Users extends TextFieldSuggestion {
  mapSuggestions(suggestion) {
    if (suggestion.user.is_private) return;
    return (
      <div
        onClick={() => this.clickSuggestion(suggestion.user.username)}
        style={{
          display: 'inline-grid',
          gridTemplateColumns: '40px auto auto'
        }}
      >
        <img
          src={suggestion.user.profile_pic_url}
          style={{
            border: 'solid 1px #efefef',
            borderRadius: '30px',
            height: '30px',
            margin: '0 10px 0 0',
            width: '30px'
          }}
          alt={'profile picture of ' + suggestion.user.username}
        />
        <div className="suggestion_text_hashtags">
          {suggestion.user.username}
        </div>
        <div className="amount_text_hashtags" style={{ textAlign: 'right' }}>
          {suggestion.user.follower_count} followers
        </div>
      </div>
    );
  }
}
