import React, { Component } from 'react';

export default class LandingPageSuccess extends Component {
  render() {
    if (!this.props.display) return <div />;
    return (
      <div
        style={
          this.props.display
            ? { opacity: 1, display: 'flex' }
            : { display: 'none' }
        }
        className="connect_insta_account"
      >
        <h1 id="w-node-b0d9bd887e77-3645cebf" className="logintitle">
          We&#x27;re pumped to welcome you to Pink Parrot!😏
        </h1>
        <div className="loginsubtitle">Always press save.</div>
        <div id="w-node-b0d9bd887e7b-3645cebf" className="successimage" />
        <button onClick={this.props.toggle} className="loginbutton w-button">
          Get Started
        </button>
      </div>
    );
  }
}
