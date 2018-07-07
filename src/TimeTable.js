import React from 'react';
import { Context } from './Context';

class TimetableWrapper extends React.Component {
  render() {
    return (
      <div>
        <div className="legendholder horizontal">
          <div className="legendtext horizontaltext">Mon</div>
          <div className="legendtext horizontaltext">Tue</div>
          <div className="legendtext horizontaltext">Wed</div>
          <div className="legendtext horizontaltext">Thu</div>
          <div className="legendtext horizontaltext">Fri</div>
          <div className="legendtext horizontaltext">Sat</div>
          <div className="legendtext horizontaltext">Sun</div>
        </div>
        <div className="actvityholder" style={{ alignItems: 'start' }}>
          <div className="legendholder">
            <div className="legendtext">1am</div>
            <div className="legendtext">2</div>
            <div className="legendtext">3</div>
            <div className="legendtext">4</div>
            <div className="legendtext">5</div>
            <div className="legendtext">6</div>
            <div className="legendtext">7</div>
            <div className="legendtext">8</div>
            <div className="legendtext">9</div>
            <div className="legendtext">10</div>
            <div className="legendtext">11</div>
            <div className="legendtext">12</div>
            <div className="legendtext">1pm</div>
            <div className="legendtext">2</div>
            <div className="legendtext">3</div>
            <div className="legendtext">4</div>
            <div className="legendtext">5</div>
            <div className="legendtext">6</div>
            <div className="legendtext">7</div>
            <div className="legendtext">8</div>
            <div className="legendtext">9</div>
            <div className="legendtext">10</div>
            <div className="legendtext">11‍</div>
            <div className="legendtext">12‍</div>
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
      <div className={'legendtext horizontaltext'}>
        {this.range(1, 24).map((h => this.mapHours(day, h)).bind(this))}
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
      <Context.Consumer>
        {context => (
          <div
            onClick={(() => this.mark(context, day, hour)).bind(this)}
            onDragEnter={(() => this.mark(context, day, hour)).bind(this)}
            draggable="true"
            className={
              'week_schedule_column ' +
              (day % 2 ? '' : '_2nd') +
              (this.contains(
                context.state.clicked,
                this.format(new Date(4, 1, day, hour))
              )
                ? ' ifclicked'
                : '')
            }
          />
        )}
      </Context.Consumer>
    );
  }

  mark(context, day, hour) {
    context.setState(p => ({
      clicked: this.contains(
        context.state.clicked,
        this.format(new Date(4, 1, day, hour))
      )
        ? p.clicked
        : [
            ...(p.clicked ? p.clicked : []),
            this.format(new Date(4, 1, day, hour))
          ]
    }));
  }

  contains(list = [], o) {
    return list.map(e => JSON.stringify(e)).includes(JSON.stringify(o));
  }

  format(date) {
    return date.toISOString().replace('T', ' ');
  }
}

export default TimetableWrapper;
