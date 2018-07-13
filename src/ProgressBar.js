import React, { Component } from 'react';

class ProgressBar extends Component {
  state = {
    scroll: 0.0
  };

  render() {
    return (
      <div
        data-w-id="5bf9847b-11fd-dd49-fb60-fb016f780822"
        className="progressbar"
        style={{
          willChange: 'transform',
          transform: 'scaleX(' + this.state.scroll + ')'
        }}
      />
    );
  }
}

export default ProgressBar;
