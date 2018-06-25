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
        {title: "July",
        start: "2018-07-02T06:30:00",
        end: "2018-07-03T12:30:00",
         gps: "40.7128° N, 73.0060° W"},
];

class EventList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: events, // you can do something like initialData.slice(0, 10) to populate from initialData.
      view: 'listWeek'
    };
    this._updateView = this._updateView.bind(this)
  }



  componentDidMount() {
    this._reloadCalendar()

  }

  _reloadCalendar() {
  $('#calendar').fullCalendar({
    defaultView: this.state.view,
    eventSources: [
      {
        events: this.state.events
      }
    ],
    eventClick: function(eventObj) {

        alert(eventObj.title + '.\n' +
              'Start Time:' + eventObj.start.format('h:mm') + '.\n' +
              'End Time:' + eventObj.end.format('h:mm') + '.\n' +
            `Google Maps link: http://maps.google.com/maps?query${eventObj.gps}`
            );

    }
  // put your options and callbacks here
}) }

  _updateView(e) {
    e.preventDefault()
    console.log(e)
    if (this.state.view == "month") {
      this.setState({view: "listWeek"})
      $('#calendar').fullCalendar('changeView', 'listWeek');
    } else {
      this.setState({view: "month"})
      $('#calendar').fullCalendar('changeView', 'month');
    }
  }
  render() {


    return (
      <div className="calendar-container">
        <div className="calendar-header">
          <h2> My Calendar </h2>
          <a href="" name={this.state.view == "month"? "listWeek" : "month"} onClick={this._updateView}> Switch to {this.state.view == "month"? "list" : "month"} view </a>
        </div>
        <div id='calendar'></div>
      </div>




    );
}
}
export default EventList
