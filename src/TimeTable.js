import React from 'react';
import { Context } from './Context';

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
            {[
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23
            ].map(time => <div className="legendtext">{time}</div>)}
          </div>
          <div className="tableholder" style={{ display: 'flex' }}>
            {this.range(1, 7).map(this.mapDays.bind(this))}
          </div>
        </div>
      </div>
    );
  }

  mapDays(day) {
    return (
      <div key={day} className={'legendtext horizontaltext'}>
        {this.range(1, 24).map(h => this.mapHours(day, h))}
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

  mapHours(day, hour) {
    return (
      <Context.Consumer key={hour}>
        {context => (
          <div
            onClick={() => this.mark(context, day, hour)}
            onDragEnter={() => this.mark(context, day, hour)}
            draggable="true"
            className={
              'week_schedule_column ' +
              (day % 2 ? '' : '_2nd') +
              (this.contains(context.state.timetable, this.calcTime(day, hour))
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

  mark(context, day, hour) {
    function addTime(p) {
      return [
        ...(p.timetable ? p.timetable : []),
        calcTime.call(this),
        calcTime2.call(this)
      ];
    }

    function removeTime(p) {
      const times = [...p.timetable];
      const index = times.indexOf(calcTime.call(this));
      times.splice(index, 2);
      return times;
    }

    function calcTime() {
      return this.calcTime(day, hour);
    }

    function calcTime2() {
      return this.format(new Date(4, 1, day, hour, 59));
    }

    context.setState(p => ({
      timetable: this.contains(context.state.timetable, calcTime.call(this))
        ? removeTime.call(this, p)
        : addTime.call(this, p)
    }));
  }

  contains(list = [], o) {
    return list.includes(o);
  }

  format(date) {
    return date.toISOString().replace('T', ' ');
  }
}

export default TimetableWrapper;
