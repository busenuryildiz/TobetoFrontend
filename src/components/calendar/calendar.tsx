import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import trLocale from "@fullcalendar/core/locales/tr";
import { DateSelectArg } from "@fullcalendar/core/index.js";
import { useEffect, useState } from "react";
import "./calendar.css";
import GetAllCourseAndLessonInfo from "./GetAllCourseAndLessonInfo";

const Calendar = ({ lessons }: { lessons: GetAllCourseAndLessonInfo[] }) => {
  const [events, setEvents] = useState<any>([]);

  console.log(lessons);

  useEffect(() => {
    const newEvents = lessons.map((lesson: any) => ({
      title: `${lesson.courseName} (${lesson.courseClassroom})`,
      start: new Date(lesson.lessonDateAndHour),
      instructors: lesson.instructorFirstAndLastNames
        ? lesson.instructorFirstAndLastNames
            .map(
              (instructor: {
                instructorFirstName: any;
                instructorLastName: any;
              }) =>
                `${instructor.instructorFirstName} ${instructor.instructorLastName}`
            )
            .join(", ")
        : "",
      className: determineEventClass(lesson.lessonDateAndHour),
    }));
    setEvents(newEvents);
  }, [lessons]);

  function determineEventClass(lessonDateAndHour: string) {
    const eventDate = new Date(lessonDateAndHour);
    const today = new Date();
    const isPastEvent = eventDate < today;

    return `event-box ${isPastEvent ? "bg-red" : "bg-blue"}`;
  }

  function handleDateSelect(selectInfo: DateSelectArg) {
    let title = prompt("Please enter a new title for your event");
    if (!title) return;
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // seçilen tarihten seçimi kaldır
    setEvents([...events, { title: title, ...selectInfo }]);
  }

  return (
    <div className="calendar-bg equal-box">
      <div className="fc fc-media-screen fc-direction-ltr fc-theme-standard">
        <FullCalendar
          locales={[trLocale]}
          locale="tr"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "today prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
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
  const eventTime = new Date(eventInfo.event.start).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <div className={eventInfo.event.classNames}>
        <b>{eventTime}</b>
        <p>{eventInfo.event.title}</p>
        <p>{eventInfo.event.extendedProps.instructors}</p>
      </div>
    </>
  );
}

export default Calendar;
