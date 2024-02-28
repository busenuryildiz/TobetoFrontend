import React, { useState, useEffect } from 'react';
import Calendar from '../../components/calendar/calendar';
import EducationSearchBar from '../../components/calendar/educationSearchBar/educationSearchBar';
import EducationStatus from '../../components/calendar/EducationStatus/EducationStatus';
import './CalendarPage.css';
import TeacherSearchBar from '../../components/calendar/teacherSearchBar/TeacherSearchBar';
import Navi from '../../components/navbar/Navi';
import Footer from '../../components/footer/Footer';
import GetAllCourseAndLessonInfo from '../../components/calendar/GetAllCourseAndLessonInfo';
import axios from 'axios';

const CalendarPage = () => {
  const [lessonsState, setLessonsState] = useState<GetAllCourseAndLessonInfo[]>([]);
  const [filteredLessons, setFilteredLessons] = useState<GetAllCourseAndLessonInfo[]>([]);
  const [teachers, setTeachers] = useState<any[]>([]);


  useEffect(() => {
    axios.get('http://localhost:6280/api/Lessons/GetAllCourseAndLessonInfo')
      .then(response => {
        setLessonsState(response.data);
      })
      .catch(error => {
        console.error('Error fetching lesson courses:', error);
      });
  }, []);

  useEffect(() => {
    if (lessonsState) {
      try {
        const uniqueTeachersSet = new Set();
        lessonsState.forEach(lesson => {
          lesson.instructorFirstAndLastNames?.forEach(instructor => {
            uniqueTeachersSet.add(`${instructor.instructorFirstName} ${instructor.instructorLastName}`);
          });
        });
        const uniqueTeachers = Array.from(uniqueTeachersSet);
        setTeachers(uniqueTeachers);
        setFilteredLessons(lessonsState);
      } catch (error) {
        console.error("An error occurred while processing lessonsState:", error);
      }
    }
  }, [lessonsState]);

  const handleSearch = (searchTerm: string) => {
    const filteredCourses = lessonsState.filter((lesson) =>
    lesson.courseName?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLessons(filteredCourses);
  };

  const handleSearchTeacher = (searchTerm: string) => {
    const filteredCourses = lessonsState.filter((lesson) =>
      lesson.instructorFirstAndLastNames &&
      lesson.instructorFirstAndLastNames.some((instructor) =>
        `${instructor.instructorFirstName} ${instructor.instructorLastName}`.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredLessons(filteredCourses);
  };
  
  

  const handleEducationStatusFilter = (status: string) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    let filteredCourses: GetAllCourseAndLessonInfo[] = [];

    switch (status) {
      case 'past':
        filteredCourses = lessonsState.filter(
          (lesson) => {
            const lessonDate = lesson.lessonDateAndHour ? new Date(lesson.lessonDateAndHour) : null;
            if (lessonDate) {
              console.log("Lesson Date:", lessonDate);
              console.log("Current Date:", currentDate);
              return lessonDate < currentDate;
            }
            return false;

            }  );
        break;

      case 'current':
        filteredCourses = lessonsState.filter(
          (lesson) => {
          const lessonDate = lesson.lessonDateAndHour ? new Date(lesson.lessonDateAndHour) : null;
          if (lessonDate) {
            console.log("Lesson Date:", lessonDate);
            console.log("Current Date:", currentDate);
            return lessonDate >= currentDate && lessonDate < new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
          }
            return false
          }
        );
        break;
      case 'future':
        filteredCourses = lessonsState.filter(
          (lesson) => {
            const lessonDate = lesson.lessonDateAndHour ? new Date(lesson.lessonDateAndHour) : null;
            if (lessonDate) {
              console.log("Lesson Date:", lessonDate);
              console.log("Current Date:", currentDate);
              return lessonDate >= new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
            }
            return false;
          }
        );
        break;
      default:
        filteredCourses = lessonsState;
        break;
    }

    console.log("Filtered Courses:", filteredCourses);
    setFilteredLessons(filteredCourses);
  };

  const handleTeacherSelect = (selectedTeacher: string) => {
    const filteredCourses = lessonsState.filter(course => {
      return course.instructorFirstAndLastNames?.some(instructor =>
        `${instructor.instructorFirstName} ${instructor.instructorLastName}` === selectedTeacher
      );
    });
    setFilteredLessons(filteredCourses);
  };
  


  return (
    <div>
      <Navi />
      <div className="p-0 light-calendar container-fluid">
        <div className="row mx-0">
          <div className="col-lg-3 col-md-4 col-12 mt-3 p-0">
            <div className="filter-left equal-box">
              <EducationSearchBar onSearch={handleSearch} />
              <TeacherSearchBar teachers={teachers} onTeacherSelect={handleTeacherSelect} onSearch={handleSearchTeacher} />
              <EducationStatus onFilter={handleEducationStatusFilter} />
            </div>
          </div>
          <div className="filter-right col-lg-9 col-md-8 col-12 mt-3 p-0 mb-5" style={{height:'70%'}}>
            <Calendar lessons={filteredLessons} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CalendarPage;