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
            onClick={() => this.clickSuggestion(suggestion, context)}
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

  async clickSuggestion(suggestion, context) {
    await this.setState({ value: suggestion.place.location.pk });
    await this.setState(p => ({
      list: [...(p.list || []), suggestion.place.location.name],
      suggestions: []
    }));
    await this.submitText(context);
  }

  addValue(old = [], value) {
    return [...old, value];
  }

  map(list = [], context) {
    return super.map(this.state.list, context);
  }

  remove(index, context) {
    super.remove(index, context);
    this.setState(p => {
      let l = [...p.list];
      l.splice(index, 1);
      return { list: l };
    });
  }
}
