import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import trLocale from '@fullcalendar/core/locales/tr';
import { DateSelectArg } from '@fullcalendar/core/index.js';
import { useEffect, useState } from 'react';
import { LessonCourse } from '../../services/pages/calendar/LessonCoursesService';
import './calendar.css'; 

type CalendarProps = {
  lessonCourses: LessonCourse[];
};

const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
  const [events, setEvents] = useState<any>([]);

  // Populate events when lessonCourses prop changes
  useEffect(() => {
    const newEvents = props.lessonCourses.map((course) => ({
      title: `${course.courseName} (${course.classroomName})`,
      start: new Date(course.lessonTime),
      instructor: course.instructorName,
      className: determineEventClass(course.lessonTime),
    }));
    setEvents(newEvents);
  }, [props.lessonCourses]);

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

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <div className="container mt-5">
      <div className="card p-5">
        <FullCalendar
          locales={[trLocale]}
          locale="tr"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
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
