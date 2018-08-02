import React, { Component } from 'react';
import ReactDom from 'react-dom';
import WeeklyDatePicker from './dist/index.js';

class App extends Component {
  onDateChange = date => {
    console.log('date : ', date)
  }
  render () {
    return (
      <div>
        Hello world!
        <WeeklyDatePicker onDateChange={this.onDateChange}/>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'));

