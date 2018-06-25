import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventList from './event_list'

class App extends Component {
  render() {
    return (
      <div>
        <EventList  />
      </div>
    );
  }
}

export default App;
