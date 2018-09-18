import React, { Component } from 'react';
import { Context } from './Context';
import API_Gageway from './API_Gateway';

export default class TextFieldBroad extends Component {
  state = {
    suggestions: [],
    value: ''
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
              onChange={e => this.setState({ value: e.target.value })}
              onKeyPress={e =>
                this.pressEnter(e) ? this.submitText(context) : null
              }
            />
            <div
              style={{
                display:
                  this.state.suggestions.length > 0 ? 'inline-grid' : 'none',
                position: 'relative',
                top: '-60px'
              }}
              className="suggestions"
            />
          </div>
        )}
      </Context.Consumer>
    );
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
}
