import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function Calendarr() {
  const events = [
    {
      title: 'Meeting',
      start: new Date(),
      end: new Date(moment().add(1, 'hours').toDate()),
    },
    // Add more events here
  ];

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}

export default Calendarr;
