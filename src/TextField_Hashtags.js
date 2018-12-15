import React from 'react';
import TextFieldSuggestion from './TextFieldSuggestion';

export default class TextFieldHashtags extends TextFieldSuggestion {
  query = 'hashtags';
  iconClass = 'hashtagicon';

  mapSuggestions(suggestion, context) {
    return (
      <div
        onClick={() => this.clickSuggestion(suggestion.hashtag.name, context)}
        style={{ display: 'inline-flex', justifyContent: 'space-between' }}
      >
        <div className="suggestion_text_hashtags">
          #{suggestion.hashtag.name}
        </div>
        <div className="amount_text_hashtags">
          {suggestion.hashtag.media_count} posts
        </div>
      </div>
    );
  }
}
