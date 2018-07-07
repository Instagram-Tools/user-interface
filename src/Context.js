// first we will make a new context
import React, { Component } from 'react';

export const Context = React.createContext();

// Then create a provider Component
export class Provider extends Component {
  state = {
    enable_like: true,
    enable_comment: true,
    enable_follow: true,
    enable_unfollow: true
  };

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          setState: this.setState.bind(this)
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
