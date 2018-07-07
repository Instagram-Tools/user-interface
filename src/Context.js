// first we will make a new context
import React, { Component } from 'react';

export const Context = React.createContext();

// Then create a provider Component
export class Provider extends Component {
  state = {
    do_comment_enabled: true,
    do_follow_enabled: true,
    do_like_enabled: true,
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
