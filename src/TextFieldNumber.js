import React, { Component } from 'react';
import { Context } from './Context';

export default class TextFieldNumber extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <div
            className="columnholder filterholder first"
            style={{ width: 'unset' }}
          >
            <input
              type="number"
              className="text-field filter w-input"
              maxLength="256"
              value={context.state[this.props.value]}
              onChange={e => {
                if (this.props.max && e.target.value > this.props.max) return;

                const value =
                  e.target.value >= (this.props.min || 0)
                    ? e.target.value
                    : this.props.min || 0;
                context.setState({
                  [this.props.value]: parseInt(value)
                });
              }}
            />
            <div className="columnholder belowholder">
              <div
                className={
                  'text_field_description below ' + this.props.className
                }
              >
                {this.props.placeholder}
              </div>
              {this.props.children}
            </div>
          </div>
        )}
      </Context.Consumer>
    );
  }
}
