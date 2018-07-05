import React, { Component } from 'react';

export default class Help extends Component {
  state = {
    display: false
  };

  render() {
    return (
      <div>
        <div
          onClick={(() => this.setState(p => ({ display: !p.display }))).bind(
            this
          )}
          style={{
            backgroundImage: this.state.display
              ? 'linear-gradient(180deg, #ff4252, #ff4252)'
              : '',
            position: 'unset'
          }}
          className="settingtitle helpcircle "
        >
          {this.state.display ? 'X' : '?'}
        </div>
        <div
          style={{
            display: this.state.display ? 'unset' : 'none',
            left: '60px'
          }}
          className="helptext"
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
