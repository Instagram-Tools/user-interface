import React, { Component } from 'react';

export default class Statistics extends Component {
  render() {
    return (
      <div className={this.props.className}>Liked: Commented: Followed:</div>
    );
  }
}
