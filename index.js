import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import WeeklyDatePicker from './src/index.js';
import styles from './index.less';

class App extends Component {
  state = {
    date: ''
  }
  onDateChange = date => {
    this.setState({ date })
  }
  render () {
    return (
      <div className={styles.container}>
        <div className="show">您选择的日期是: {this.state.date}</div>
        <WeeklyDatePicker onDateChange={this.onDateChange}/>
      </div>
    )
  }
}

ReactDom.render(
  <LocaleProvider locale={zhCN}>
    <App/>
  </LocaleProvider>,
  document.getElementById('root')
);

