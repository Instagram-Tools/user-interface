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
            checked={context.state[this.props.value]}
            onClick={(() =>
              context.setState({
                [this.props.value]: !context.state[this.props.value]
              })).bind(this)}
          />
        )}
      </Context.Consumer>
    );
  }
}
