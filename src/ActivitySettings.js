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
          <div className="form-block w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              className="form last"
            >
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
            </form>
            <div className="success-message w-form-done">
              <div className="text-block">
                Thank you! Your submission has been received!
              </div>
            </div>
            <div className="error-message w-form-fail">
              <div className="text-block-2">
                Oops! Something went wrong while submitting the form.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
