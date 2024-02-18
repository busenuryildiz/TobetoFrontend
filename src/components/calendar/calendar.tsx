import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import trLocale from '@fullcalendar/core/locales/tr';
import { DateSelectArg } from '@fullcalendar/core/index.js';
import { useEffect, useState } from 'react';
import './calendar.css';
import { GetAllLessonCourseResponse } from '../../models/responses/lessonCourse/getAllLessonCourseResponse';

type CalendarProps = {
  lessonCourses: GetAllLessonCourseResponse[];
};

const Calendar: React.FC<CalendarProps> = ({ lessonCourses }) => {
  const [events, setEvents] = useState<any>([]);

  useEffect(() => {
    const newEvents = lessonCourses.map((course: any) => ({
      title: `${course.courseName} (${course.classroom})`,
      start: new Date(course.lessonTime),
      instructor: course.instructorName,
      className: determineEventClass(course.lessonTime),
    }));
    setEvents(newEvents);
  }, [lessonCourses]);


  function determineEventClass(lessonTime: string) {
    const eventDate = new Date(lessonTime);
    const today = new Date();
    const isPastEvent = eventDate < today;

    return `event-box ${isPastEvent ? 'bg-red' : 'bg-blue'}`;
  }


  function handleDateSelect(selectInfo: DateSelectArg) {
    let title = prompt('Please enter a new title for your event');
    if (!title) return;
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // seçilen tarihten seçimi kaldır
    setEvents([...events, { title: title, ...selectInfo }]);
  }

  return (
    <div className="calendar-bg equal-box">
        <div className="fc fc-media-screen fc-direction-ltr fc-theme-standard" >
          <FullCalendar
            locales={[trLocale]}
            locale="tr"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'today prev,next',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
             
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            weekends={true}
            events={events}
            dayMaxEvents={1} // Set the maximum number of events per day
            select={(arg) => handleDateSelect(arg)}
            eventContent={renderEventContent}
            eventClick={(arg) => console.log(arg)}
            eventsSet={(arg) => console.log(arg)}
          />
        </div>
      </div>
  );
};

function renderEventContent(eventInfo: any) {
  return (
    <>
      <div className={eventInfo.event.classNames}>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
        <p>{eventInfo.event.extendedProps.instructor}</p>
      </div>
    </>
  );
}

export default Calendar;
