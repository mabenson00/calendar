import React from 'react';
import './App.css';
import 'fullcalendar';
import $ from 'jquery'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';



var moment = require('moment');


const customStyles = {
  content : {
    top                   : '400px',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

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
Modal.setAppElement('#root');

class EventList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: events, // you can do something like initialData.slice(0, 10) to populate from initialData.
      view: 'month',
      showAddEvent: false,
      modalIsOpen: false,
      date: 0,
      end: '',
      start: '',
      title: ''
    };
    this._updateView = this._updateView.bind(this)
    this._toggleAddEvent = this._toggleAddEvent.bind(this)
    this._newEvent = this._newEvent.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveEvent = this.saveEvent.bind(this)
  }



  componentDidMount() {
    this._loadCalendar()

  }

  handleChange (evt) {

   this.setState({ [evt.target.name]: evt.target.value });
 }


  afterOpenModal() {

     // references are now sync'd and can be accessed.
   }

  closeModal() {
     this.setState({modalIsOpen: false});
   }

  _toggleAddEvent(e) {
    if (!this.state.showAddEvent) {
      $(e.target).css("display", "none")
      this.setState({showAddEvent: true})
    }

  }

  _newEvent(date, jsEvent, view) {
    this.setState({modalIsOpen: true});
    this.setState({date: date.toISOString()})

  }

  handleSubmit(event) {
      let start = this.state.start
      let end = this.state.end
      let day = this.state.date
      start = day+"T"+this.state.start+":00"
      end = day+"T"+this.state.end+":00"
      let title = this.state.title
      let newEvent = {start: start, end: end, title: title}
      if (Date.parse(end) > Date.parse(start) ){
        this.saveEvent(newEvent)
        this.closeModal()
      } else {
        $('#event-container').append("<p>End Time must be later than start time</p>")
      }

      event.preventDefault();
    }

  saveEvent(event) {
    this.setState({events: [...this.state.events, event]})
    $('#calendar').fullCalendar( 'renderEvent', event, true )

  }

  _loadCalendar() {
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

    },

    dayClick: this._newEvent
  // put your options and callbacks here
}) }


  _addEvent() {
    if (this.state.showAddEvent) {
      return (
        <div className="add-event-container">
          <form name="EventForm">
            <input type="text" placeholder="title" name="title"/>
          </form>
        </div>
      )
    }
  }

  _updateView(e) {
    e.preventDefault()
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
          <button onClick={this._toggleAddEvent}> Add Event </button>
        </div>
        {this._addEvent()}
        <div className="options">
          <button onClick={this._updateView}> Switch to {this.state.view == "month"? "list" : "month"} view </button>
        </div>
        <div id='calendar'> </div>
        <Modal
         isOpen={this.state.modalIsOpen}
         onAfterOpen={this.afterOpenModal}
         onRequestClose={this.closeModal}
         style={customStyles}
         contentLabel="Example Modal">
          <div className="modal-container">
            <div id ="event-container" className="add-event-container">
              <h4> Add Event for {this.state.date} </h4>
              <form name="EventForm"  onSubmit={this.handleSubmit}>
                Title<input type="text" onChange={this.handleChange} placeholder="Meeting with..." name="title"/>
                Start Time<input type="text" onChange={this.handleChange} name="start" placeholder="HH:MM (24 hours)" />
                End Time<input type="text" onChange={this.handleChange} name="end" placeholder="HH:MM (24 hours)" />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
       </Modal>
      </div>




    );
}
}
export default EventList
