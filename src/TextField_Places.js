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

  getList() {
    return (
      <Context.Consumer>
        {context => (
          <div className="columnholder applied_hashtasgs_and_locations">
            {this.map(this.state.list, context)}
          </div>
        )}
      </Context.Consumer>
    );
  }

  map(list = [], context) {
    return list.map((element, index) => (
      <div key={index} className="applied_hashtag_or_location">
        <div className="classicon">
          <div className={this.props.iconClass} />
        </div>
        <div className="hashtag_or_location_text">{element}</div>
        <div
          className="deletebutton"
          value={index}
          onClick={() => this.remove(index, context)}
        >
          <div className="xicon" value={index} />
        </div>
      </div>
    ));
  }

  remove(index, context) {
    this.setState(p => {
      let l = [...p.list];
      l.splice(index, 1);
      return { list: l };
    });
    context.setState(p => {
      let l = [...p[this.props.value]];
      l.splice(index, 1);
      return { [this.props.value]: l };
    });
  }
}
