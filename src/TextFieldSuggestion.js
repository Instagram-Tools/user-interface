import React, { Component } from 'react';
import { Context } from './Context';
import API_Gateway from './API_Gateway';
import env from './Env';
import console from './Log';

export default class TextFieldSuggestion extends Component {
  suggestionURL = 'https://www.instagram.com/web/search/topsearch/?context=blended&query=';
  servers = [this.suggestionURL, ...this.buildRelays(env.RELAYS)];

  buildRelays(relays = []) {
    return relays.map(r => r + this.suggestionURL);
  }

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
            <div className="columnholder applied_hashtasgs_and_locations">
              {this.map(context.state[this.props.value], context)}
            </div>
            <div className="columnholder hashtag_settings_holder">
              <input
                type="text"
                className="text-field broadfield w-input"
                maxLength="256"
                placeholder={this.props.placeholder}
                value={this.state.value}
                onChange={e => this.onInput(e)}
                onKeyPress={e =>
                  this.pressEnter(e) ? this.submitText(context) : null
                }
                ref={input => {
                  this.textInput = input;
                }}
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
                {this.Suggestions(context)}
              </div>
            </div>
          </div>
        )}
      </Context.Consumer>
    );
  }

  map(list = [], context) {
    return list.map((element, index) => (
      <div key={index} className="applied_hashtag_or_location">
        <div className="classicon">
          <div className={this.iconClass} />
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
    context.setState(p => {
      let l = [...p[this.props.value]];
      l.splice(index, 1);
      return { [this.props.value]: l };
    });
    this.textInput.focus();
  }

  onInput(e) {
    this.suggest(e.target.value);
    return this.setState({ value: e.target.value });
  }

  Suggestions(context) {
    return this.state.suggestions
      .sort(this.sortByChildren())
      .filter(this.firstN(10))
      .map(suggestion => this.mapSuggestions(suggestion, context));
  }

  sortByChildren() {
    return (p1, p2) => compareByChildren(p1, p2);

    function compareByChildren(p1, p2) {
      try {
        if (p1.hashtags && p2.hashtags) {
          return p2.hashtag.media_count - p1.hashtag.media_count;
        } else if (p1.user && p2.user) {
          return p2.user.follower_count - p1.user.follower_count;
        }
      } catch (e) {
        console.error(e);
      }
      return 0;
    }
  }

  firstN(number) {
    return (element, index) => index < number;
  }

  mapSuggestions(suggestion, context) {
    return console.error(
      `do not use this Stub: \n mapSuggestions(${suggestion})`
    );
  }

  async clickSuggestion(suggestion, context) {
    let separator = this.separator;
    function autoComplete(value) {
      const splitAt = value.lastIndexOf(separator);
      return (
        value.substring(0, splitAt) +
        (splitAt > 0 ? separator : '') +
        suggestion
      );
    }
    await this.setState(p => ({
      value: autoComplete(p.value)
    }));
    await this.submitText(context);

    this.textInput.focus();
  }

  submitText(context) {
    const value = this.state.value;
    context.setState(p => ({
      [this.props.value]: this.addValue(p[this.props.value], value)
    }));
    this.setState({ value: '', suggestions: [] });
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
    this.getSuggestion(query).then((suggestions = []) => {
      console.log('suggestions', suggestions);
      return this.setState({ suggestions });
    });
  }

  async getSuggestion(query) {
    if (!this.query) return console.error('this.query is missing');
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

        return json[this.query];
      } catch (e) {
        console.error(e);
      }
    }
    this.setState({ servers: [...this.servers] });
    return [];
  }
}
