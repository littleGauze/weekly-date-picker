import React, { Component, createRef } from 'react';
import { Icon, Calendar } from 'antd';
import classNames from 'classnames';
import moment from 'moment';
import styles from './index.less';

const FT = 'YYYY-MM-DD';
const Weeks = ({ weeks = [], onSeleced }) => {
  return weeks.map(item => {
    const style = classNames({
      item: true,
      selected: item.selected,
    });
    return (
      <div className={style} key={item.idx} onClick={() => onSeleced(item.date)}>
        <p className="week">{item.name}</p>
        <p>{item.date}</p>
      </div>
    );
  });
};

const weekNames = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
const getWeeks = date => {
  let m = moment(date);

  // chose before one day
  if (m.format('d') === '0') {
    m = m.subtract(1, 'd');
  }
  return ['1', '2', '3', '4', '5', '6', '7'].map(idx => {
    const d = m.day(idx).format(FT);
    return {
      idx,
      date: d,
      name: weekNames[idx - 1],
      selected: moment(date).format(FT) === d,
    };
  });
};

class WeekCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date || new Date(),
      showCalendarPanel: false,
    };
    this.toggleContainer = createRef();
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  onSelect = m => {
    const { onDateChange } = this.props;
    this.setState({ date: m.format(FT), showCalendarPanel: false });
    onDateChange(m.format(FT));
  };

  onClickOutsideHandler = evt => {
    const { showCalendarPanel } = this.state;
    if (showCalendarPanel && !this.toggleContainer.current.contains(evt.target)) {
      this.setState({ showCalendarPanel: false });
    }
  };

  handleSelected = date => {
    const { onDateChange } = this.props;
    this.setState({ date });
    onDateChange(date);
  };

  lastWeek = () => {
    const { date } = this.state;
    const { onDateChange } = this.props;
    const m = moment(date);
    const idx = m.format('d');
    const newDate = m.day(parseInt(idx, 10) - 7).format(FT);
    this.setState({ date: newDate });
    onDateChange(newDate);
  };

  nextWeek = () => {
    const { date } = this.state;
    const { onDateChange } = this.props;
    const m = moment(date);
    const idx = m.format('d');
    const newDate = m.day(parseInt(idx, 10) + 7).format(FT);
    this.setState({ date: newDate });
    onDateChange(newDate);
  };

  toggleCalendarPanel = e => {
    e.stopPropagation();
    const { showCalendarPanel } = this.state;
    this.setState({ showCalendarPanel: !showCalendarPanel });
  };

  render() {
    const { date, showCalendarPanel } = this.state;

    // get week
    const weeks = getWeeks(date);

    return (
      <div className={styles.container}>
        <div className="header">
          <div className="item" key="lastWeek" onClick={this.lastWeek}>
            <p>
              <Icon type="left" />上一周
            </p>
          </div>
          <Weeks weeks={weeks} onSeleced={this.handleSelected} />
          <div className="item" key="nextWeek" onClick={this.nextWeek}>
            <p>
              下一周<Icon type="right" />
            </p>
            <p className="calendar" onClick={this.toggleCalendarPanel}>
              <Icon type="calendar" />
            </p>
          </div>
          {showCalendarPanel && (
            <div ref={this.toggleContainer} className="calendarPanel">
              <Calendar fullscreen={false} value={moment(date)} onSelect={this.onSelect} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default WeekCalendar;
