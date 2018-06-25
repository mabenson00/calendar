import React from 'react';
import './App.css';

const events = [
  {name: "Meeting with Sam",
   event_start: new Date(2018, 10, 26, 8, 0, 0),
   event_end: new Date(2018, 10, 26, 8, 30, 0),
   gps: "40.7128° N, 73.060° W"},

   {name: "Meeting with Jennifer",
    event_start: new Date(2018, 10, 27, 8, 0, 0),
    event_end: new Date(2018, 10, 27, 8, 30, 0),
    gps: "40.7128° N, 73.060° W"},

    {name: "Meeting with Jose",
     event_start: new Date(2018, 10, 25, 8, 0, 0),
     event_end: new Date(2018, 10, 25, 8, 30, 0),
     gps: "40.7128° N, 73.060° W"},

     {name: "Fun",
      event_start: new Date(2018, 10, 26, 5, 0, 0),
      event_end: new Date(2018, 10, 26, 5, 30, 0),
      gps: "40.7128° N, 73.060° W"},

      {name: "X",
       event_start: new Date(2018, 10, 27, 5, 0, 0),
       event_end: new Date(2018, 10, 27, 5, 30, 0),
       gps: "40.7128° N, 73.060° W"},

       {name: "Y",
        event_start: new Date(2018, 11, 2, 8, 0, 0),
        event_end: new Date(2018, 11, 1, 8, 30, 0),
        gps: "40.7128° N, 73.0060° W"},
];

class EventList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: events // you can do something like initialData.slice(0, 10) to populate from initialData.

    };
    console.log(this.state)
  }
  render() {


    return (
      this.state.events.map((event) =>
      <li>{event.name}</li>
    )

    );
}
}
export default EventList
