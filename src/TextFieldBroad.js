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
      [this.props.value]: [
        ...(p[this.props.value] ? p[this.props.value] : []),
        value
      ]
    }));
    e.target.value = '';
  }

  pressEnter(e) {
    return e.charCode === 13;
  }
}
