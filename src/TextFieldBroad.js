import React, { Component } from 'react';
import { Context } from './Context';

export default class TextFieldBroad extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <input
            type="text"
            className="text-field broadfield w-input"
            maxLength="256"
            placeholder={this.props.placeholder}
            onKeyPress={(e =>
              this.pressEnter(e) ? this.submitText(e, context) : null).bind(
              this
            )}
          />
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
}
