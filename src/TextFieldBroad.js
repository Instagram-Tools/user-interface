import React, { Component } from 'react';
import { Context } from './Context';
import './css/rc-switch.css';

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
            onKeyPress={(e => {
              if (e.charCode === 13) {
                const value = e.target.value;
                context.setState(p => ({
                  [this.props.value]: [
                    ...(p[this.props.value] ? p[this.props.value] : []),
                    value
                  ]
                }));
                e.target.value = '';
              }
            }).bind(this)}
          />
        )}
      </Context.Consumer>
    );
  }
}
