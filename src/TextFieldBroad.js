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
                display: this.state.suggestions.length > 0 ? 'flex' : 'none'
              }}
              data-w-id="034888e9-27da-288f-a156-1f16d12dae01"
              className="suggestions"
            >
              <div className="suggestionscolumn">
                <div className="suggestion_text_hashtags">#abs</div>
                <div className="suggestion_text_hashtags">#gymrat</div>
                <div className="suggestion_text_hashtags">#fitnessworkout</div>
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
        )}
      </Context.Consumer>
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
