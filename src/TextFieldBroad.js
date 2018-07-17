import React, { Component } from 'react';
import { Context } from './Context';
import API_Gageway from './API_Gateway';

export default class TextFieldBroad extends Component {
  state = {
    suggestions: []
  };

  render() {
    return (
      <Context.Consumer>
        {context => (
          <div>
            <input
              type="text"
              className="text-field broadfield w-input"
              maxLength="256"
              placeholder={this.props.placeholder}
              onKeyPress={(e =>
                this.pressEnter(e)
                  ? this.submitText(e, context)
                  : this.suggest(e.target.value)).bind(this)}
            />
            <div
              style={{
                display: this.state.suggestions.length > 0 ? 'block' : 'none',
                position: 'relative',
                top: '-33px'
              }}
              className="suggestions"
            >
              {this.state.suggestions.map(this.mapSuggestions.bind(this))}
            </div>
          </div>
        )}
      </Context.Consumer>
    );
  }

  mapSuggestions(suggestion) {
    return (
      <div style={{ display: 'flex' }}>
        <div className="suggestion_text_hashtags">
          #{suggestion.hashtag.name}
          {suggestion.hashtag.name}
        </div>
        <div className="amount_text_hashtags">
          {suggestion.hashtag.media_count} posts
        </div>
      </div>
    );
  }

  submitText(e, context) {
    const value = e.target.value;
    context.setState(p => ({
      [this.props.value]: this.addValue(p[this.props.value], value)
    }));
    e.target.value = '';
  }

  addValue(old = [], value) {
    let newVar = [...old];
    value
      .replace(/#|@/gi, '')
      .split(' ')
      .filter(s => s.length > 0)
      .forEach(s => newVar.push(s));
    return newVar;
  }

  pressEnter(e) {
    return e.charCode === 13;
  }

  suggest(value) {
    this.getSuggestion(value).then(suggestions =>
      this.setState({ suggestions })
    );
  }

  async getSuggestion(query) {
    if (!this.props.query) return;

    let url =
      'https://www.instagram.com/web/search/topsearch/?context=blended&' +
      'query=' +
      query;
    let response = await fetch(url);
    let text = await API_Gageway.parsResponse(response);
    let json = JSON.parse(text);
    return json[this.props.query];
  }
}
