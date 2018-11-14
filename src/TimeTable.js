import React from 'react';
import { Context } from './Context';
import moment from 'moment-timezone';

class TimetableWrapper extends React.Component {
  render() {
    return (
      <div>
        <div className="legendholder horizontal">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div className="legendtext horizontaltext">{day}</div>
          ))}
        </div>
        <div className="actvityholder" style={{ alignItems: 'start' }}>
          <div className="legendholder">
            {this.range(0, 23).map(time => (
              <div className="legendtext">{time}</div>
            ))}
          </div>
          <div className="tableholder" style={{ display: 'flex' }}>
            {this.range(1, 7).map(this.mapDays.bind(this))}
          </div>
        </div>
      </div>
    );
  }

  range(from, to) {
    let list = [];
    for (let i = from; i <= to; i++) {
      list.push(i);
    }
    return list;
  }

  contains(list = [], o) {
    return list.includes(o);
  }

  mapDays(day) {
    return (
      <div key={day} className={'legendtext horizontaltext'}>
        {this.range(1, 24).map(h => this.mapHours(day, h))}
      </div>
    );
  }

  mapHours(day, hour) {
    let beginning = this.calcTime(day, hour);
    let ending = this.format(new Date(4, 1, day, hour, 59));
    return (
      <Context.Consumer key={hour}>
        {context => (
          <div
            onClick={() => this.mark(context, beginning, ending)}
            onDragEnter={() => this.mark(context, beginning, ending)}
            draggable="true"
            className={
              'week_schedule_column ' +
              (day % 2 ? '' : '_2nd') +
              (this.contains(context.state.timetable, beginning)
                ? ' ifclicked'
                : '')
            }
          />
        )}
      </Context.Consumer>
    );
  }

  calcTime(day, hour) {
    return this.format(new Date(4, 1, day, hour, 1));
  }

  mark(context, start, end) {
    function addTime(p) {
      return [...(p.timetable ? p.timetable : []), { start, end }];
    }

    function removeTime(p) {
      const times = [...p.timetable];
      const index = times.indexOf({ start, end });
      times.splice(index, 1);
      return times;
    }

    context.setState(p => ({
      timetable: this.contains(context.state.timetable, { start, end })
        ? removeTime.call(this, p)
        : addTime.call(this, p)
    }));
  }

  format(date) {
    return moment(date)
      .utc()
      .add(new Date().getTimezoneOffset(), 'm')
      .format()
      .replace('T', ' ');
  }
}

export default TimetableWrapper;
