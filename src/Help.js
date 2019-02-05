import React, { Component } from 'react';

export default class Help extends Component {
  state = {
    display: false
  };

  render() {
    return (
      <div>
        <div
          onClick={() => this.setState(p => ({ display: !p.display }))}
          className={
            this.state.display ? 'new_help_circle closehelp' : 'new_help_circle'
          }
        />
        <div
          style={{
            display: this.state.display ? 'unset' : 'none',
            position: 'absolute',
            backgroundColor: '#f5f5f580'
          }}
          className="helptext"
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
