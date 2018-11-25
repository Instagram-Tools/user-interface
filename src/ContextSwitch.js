import React, { Component } from 'react';
import { Context } from './Context';
import './css/rc-switch.css';
import Switch from 'rc-switch';

export default class ContextSwitch extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <Switch
            className={'switch_general_settings ' + this.props.className}
            checked={this.isChecked(context)}
            onClick={() => this.doClick(context)}
          />
        )}
      </Context.Consumer>
    );
  }

  isChecked(context) {
    return context.state[this.props.value];
  }

  doClick(context) {
    return context.setState(p => ({
      [this.props.value]: !p[this.props.value]
    }));
  }
}
