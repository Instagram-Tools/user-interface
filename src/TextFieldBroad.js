import React, { Component } from 'react';
import { Context } from './Context';
import API_Gateway from './API_Gateway';

export default class TextFieldBroad extends Component {
  servers = [
    'https://www.instagram.com/web/search/topsearch/?context=blended&' +
      'query='
  ];
  state = {
    suggestions: [],
    value: '',
    servers: [...this.servers]
  };
  separator = ' ';

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
              value={this.state.value}
              onChange={(e => {
                this.suggest(e.target.value);
                return this.setState({ value: e.target.value });
              }).bind(this)}
              onKeyPress={(e =>
                this.pressEnter(e) ? this.submitText(context) : null).bind(
                this
              )}
            />
            <div
              style={{
                display:
                  this.state.suggestions.length > 0 ? 'inline-grid' : 'none',
                position: 'relative',
                top: '-60px'
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
    function hashtagSuggestion() {
      return (
        <div
          onClick={(() => this.clickSuggestion(suggestion.hashtag.name)).bind(
            this
          )}
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
    function placeSuggestion() {
      return (
        <div
          onClick={(() =>
            this.clickSuggestion(suggestion.place.location.pk)).bind(this)}
          style={{ display: 'inline-flex', justifyContent: 'space-between' }}
        >
          <div className="suggestion_text_locations">
            {suggestion.place.location.name}
          </div>
        </div>
      );
    }
    function userSuggestion() {
      if (suggestion.user.is_private) return;
      return (
        <div
          onClick={(() => this.clickSuggestion(suggestion.user.username)).bind(
            this
          )}
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

    switch (this.props.query) {
      case 'hashtags':
        return hashtagSuggestion.call(this);
      case 'places':
        return placeSuggestion.call(this);
      case 'users':
        return userSuggestion.call(this);
      default:
        console.log(suggestion);
    }
  }

  clickSuggestion(suggestion) {
    let separator = this.separator;
    function autoComplete(value) {
      const splitAt = value.lastIndexOf(separator);
      return (
        value.substring(0, splitAt) +
        (splitAt > 0 ? separator : '') +
        suggestion
      );
    }
    this.setState(p => ({
      value: autoComplete(p.value)
    }));
  }

  submitText(context) {
    const value = this.state.value;
    context.setState(p => ({
      [this.props.value]: this.addValue(p[this.props.value], value)
    }));
    this.setState({ value: '' });
  }

  addValue(old = [], value) {
    let newVar = [...old];
    value
      .replace(/#|@/gi, '')
      .split(this.separator)
      .filter(s => s.length > 0)
      .forEach(s => newVar.push(s));
    return newVar;
  }

  pressEnter(e) {
    return e.charCode === 13;
  }

  suggest(value) {
    const splitAt = value.lastIndexOf(this.separator);
    const query = value.substring(splitAt);
    this.getSuggestion(query).then(suggestions =>
      this.setState({ suggestions })
    );
  }

  async getSuggestion(query) {
    if (!this.props.query) return;
    let servers = this.state.servers;

    function chooseServer() {
      const server = servers[servers.length - 1];
      servers.pop();
      return server;
    }

    while (servers.length > 0) {
      const server = chooseServer();
      let url = server + query;
      try {
        let json = await API_Gateway.fetchJSON(url);

        if (json) this.state.servers.push(server);

        return json[this.props.query];
      } catch (e) {
        console.error(e);
      }
    }
    this.setState({ servers: [...this.servers] });
    return [];
  }
}
