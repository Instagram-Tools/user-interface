import React, { Component } from 'react';
import { Context } from './Context';

export default class TextField extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <div
            className="columnholder filterholder first"
            style={{ width: 'unset' }}
          >
            <input
              required={this.props.required}
              type={this.props.type || 'text'}
              style={this.props.inputStyle}
              className={this.props.inputClass || 'text-field filter w-input'}
              maxLength={this.props.maxLength || '256'}
              value={this.getValue(context)}
              onChange={e => this.setValue(context, e.target.value)}
              autoComplete="off"
            />
            <div className="columnholder belowholder">
              <div
                className={
                  'text_field_description below ' + this.props.className
                }
              >
                {this.props.placeholder}
              </div>
            </div>
          </div>
        )}
      </Context.Consumer>
    );
  }

  setValue(context, value = '') {
    context.setState({
      [this.props.value]: value
    });

    if (this.props.setIsSet) this.props.setIsSet(value.length > 0);
  }

  getValue(context) {
    return context.state[this.props.value];
  }
}
