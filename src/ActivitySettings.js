import React, { Component } from 'react';
import Help from './Help';
import Timetable from './TimeTable';

export default class ActivitySettings extends Component {
  render() {
    return (
      <div className="timetable">
        <div className="header">
          <h1 className="titlepage activityunderline">Activity</h1>
        </div>
        <div className="body">
          <div className="form-block w-form form">
            <div className="titleholder">
              <label htmlFor="email" className="settingtitle scheduletitle">
                Schedule activity time
              </label>
              <Help className="helptext">
                <strong>Activity time: </strong> <br />
                To simulate Instagram a real person you should schedule your
                activity time.<br />
                Mark the time fields you want PinkParrot to interact with users.<br />
                Recommendation: 6 - 18 hours/day
              </Help>
            </div>

            <Timetable />
          </div>
        </div>
      </div>
    );
  }
}
