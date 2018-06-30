// first we will make a new context
import { Component } from 'react';
import React from 'react';

export const Context = React.createContext();

// Then create a provider Component
export class Provider extends Component {
  state = {
    name: 'Wes',
    age: 100,
    cool: true
  };

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          growAYearOlder: () =>
            this.setState({
              age: this.state.age + 1
            }),
          setState: this.setState.bind(this)
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
