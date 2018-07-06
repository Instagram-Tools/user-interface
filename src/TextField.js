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
              type={this.props.type || 'text'}
              className="text-field filter w-input"
              maxLength="256"
              value={context.state[this.props.value]}
              onChange={(e => {
                const value = e.target.value;
                context.setState({
                  [this.props.value]: value
                });
              }).bind(this)}
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
}
