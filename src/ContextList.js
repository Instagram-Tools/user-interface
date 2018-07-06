import React, { Component } from 'react';
import { Context } from './Context';

export default class ContextList extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <div className="columnholder applied_hashtasgs_and_locations">
            {this.map(context.state[this.props.value], context)}
          </div>
        )}
      </Context.Consumer>
    );
  }

  map(list = [], context) {
    return list.map((element, index) => (
      <div key={index} className="applied_hashtag_or_location">
        <div className="classicon">
          <div className={this.props.iconClass} />
        </div>
        <div className="hashtag_or_location_text">{element}</div>
        <div
          className="deletebutton"
          value={index}
          onClick={(() => this.remove(index, context)).bind(this)}
        >
          <div className="xicon" value={index} />
        </div>
      </div>
    ));
  }

  remove(index, context) {
    context.setState(p => {
      let l = [...p[this.props.value]];
      l.splice(index, 1);
      return { [this.props.value]: l };
    });
  }
}
