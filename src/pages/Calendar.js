// src/pages/Calendar.js
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const savedCols = JSON.parse(localStorage.getItem('taskColumns')) || {
      todo: [],
      inProgress: [],
      done: [],
    };
    // flatten tasks
    const allTasks = [...savedCols.todo, ...savedCols.inProgress, ...savedCols.done];
    // convert tasks to FullCalendar events
    const calEvents = allTasks
      .filter((task) => task.dueDate)
      .map((task) => ({
        title: task.title,
        start: task.dueDate,
      }));
    setEvents(calEvents);
  }, []);

  return (
    <div className="container mt-4" style={{ maxWidth: '900px' }}>
      <h2>Calendar View</h2>
      {/* Wrap the calendar in a black container for easy readability */}
      <div
        className="p-3"
        style={{
          backgroundColor: '#337',
          borderRadius: '8px',
        }}
      >
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          // You can also apply styles for the text color here:
          height="auto"
          // To forcibly set text color to white:
          eventTextColor="#fff"
        />
      </div>
    </div>
  );
}

export default Calendar;
