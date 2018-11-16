import React, { Component } from 'react';
import { Context } from './Context';

export default class Switch_Speed extends Component {
  speed = { slow: 150, medium: 100, fast: 50 };

  render() {
    return (
      <Context.Consumer>
        {context => (
          <div className="switch_general_settings title speedswitch">
            <div className="switch_general_settings title speedswitch_text_holder">
              <div
                style={this.activate(context.state.speed, this.speed.slow)}
                onClick={(e => this.setSpeed(context, this.speed.slow)).bind(
                  this
                )}
                className="speedtext slowspeed"
              >
                slow
              </div>
              <div
                style={this.activate(context.state.speed, this.speed.medium)}
                onClick={(e => this.setSpeed(context, this.speed.medium)).bind(
                  this
                )}
                className="speedtext mediumspeed"
              >
                medium
              </div>
              <div
                style={this.activate(context.state.speed, this.speed.fast)}
                onClick={(e => this.setSpeed(context, this.speed.fast)).bind(
                  this
                )}
                className="speedtext fastspeed"
              >
                fast
              </div>
            </div>
          </div>
        )}
      </Context.Consumer>
    );
  }

  activate(actualSpeed, selectedSpeed) {
    return actualSpeed === selectedSpeed
      ? {
          backgroundImage: 'linear-gradient(180deg, #31f688, #31f688)',
          color: '#fff'
        }
      : {};
  }

  setSpeed(context, selectedSpeed) {
    context.setState({ speed: selectedSpeed });
  }
}
