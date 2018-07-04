import React, { Component } from 'react';
import { Context } from './Context';
import './css/rc-switch.css';

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
              onChange={(e => {
                if (this.props.max && e.target.value > this.props.max) return;

                const value = e.target.value > 0 ? e.target.value : 0;
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
