import React, { Component } from 'react';
import Help from './Help';
import Timetable from './TimeTable';

export default class ActivitySettings extends Component {
  render() {
    return (
      <div className="timetable">
        <div className="header">
          <h1 className="titlepage">Activity</h1>
        </div>
        <div className="body">
          <div className="form-block w-form form">
            <div className="titleholder">
              <label htmlFor="email" className="settingtitle scheduletitle">
                Define bot activity
              </label>
              <Help className="helptext">
                Choose successful profiles which are similar to yours.{' '}
                <span className="helptext_secondary">
                  So you get attention from profiles which are interested in
                  your content.
                </span>
              </Help>
            </div>

            <Timetable />
          </div>
        </div>
      </div>
    );
  }
}
