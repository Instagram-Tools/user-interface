import React from 'react';
import TextFieldSuggestion from './TextFieldSuggestion';

export default class TextField_Places extends TextFieldSuggestion {
  query = 'places';

  mapSuggestions(suggestion) {
    return (
      <div
        onClick={() => this.clickSuggestion(suggestion.place.location.pk)}
        style={{ display: 'inline-flex', justifyContent: 'space-between' }}
      >
        <div className="suggestion_text_locations">
          {suggestion.place.location.name}
        </div>
      </div>
    );
  }

  pressEnter() {
    return false;
  }
}
