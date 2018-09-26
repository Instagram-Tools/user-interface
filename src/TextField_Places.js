import React from 'react';
import TextFieldSuggestion from './TextFieldSuggestion';
import { Context } from './Context';

export default class TextField_Places extends TextFieldSuggestion {
  query = 'places';
  iconClass = 'locationicon';

  mapSuggestions(suggestion) {
    return (
      <Context.Consumer>
        {context => (
          <div
            onClick={() =>
              this.clickSuggestion(suggestion.place.location.pk, context)
            }
            style={{ display: 'inline-flex', justifyContent: 'space-between' }}
          >
            <div className="suggestion_text_locations">
              {suggestion.place.location.name}
            </div>
          </div>
        )}
      </Context.Consumer>
    );
  }

  pressEnter() {
    return false;
  }

  clickSuggestion(suggestion, context) {
    this.setState({ value: suggestion });
    this.submitText(context);
    this.setState({ suggestions: [] });
  }
}
