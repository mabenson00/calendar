import React from 'react';
import './App.css';
import $ from 'jquery';
import 'fullcalendar';
var moment = require('moment');


const events = [
  {title: "Meeting with Sam",
   start: "2018-06-26T06:30:00",
   end: "2018-06-26T12:30:00",
   gps: "40.7128° N, 73.060° W"
  },

   {title: "Meeting with Jennifer",
   start: "2018-06-26T06:30:00",
   end: "2018-06-26T12:30:00",
    gps: "40.7328° N, 73.080° W"},

    {title: "Meeting with Jose",
    start: "2018-06-27T06:30:00",
    end: "2018-06-28T12:30:00",
     gps: "40.9128° N, 73.90° W"},

     {title: "Fun",
     start: "2018-06-27T08:30:00",
     end: "2018-06-26T13:30:00",
      gps: "40.3128° N, 73.460° W"},

      {title: "X",
      start: "2018-06-28T06:30:00",
      end: "2018-06-28T12:30:00",
       gps: "40.3128° N, 75.060° W"},

       {title: "Y",
       start: "2018-06-29T06:30:00",
       end: "2018-06-29T12:30:00",
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

  componentDidMount() {
    $('#calendar').fullCalendar({
      eventSources: [
        {
          events: this.state.events
        }
      ]
    // put your options and callbacks here
  })
  }
  render() {


    return (

      <div id='calendar'></div>




    );
}
}
export default EventList
