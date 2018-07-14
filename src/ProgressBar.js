import React, { Component } from 'react';
import { Context } from './Context';

class ProgressBar extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <div
            data-w-id="5bf9847b-11fd-dd49-fb60-fb016f780822"
            className="progressbar"
            style={{
              willChange: 'transform',
              transform:
                'scaleX(' +
                context.state.scrollY / context.state.scrollHeight +
                ')'
            }}
          />
        )}
      </Context.Consumer>
    );
  }
}

export default ProgressBar;
