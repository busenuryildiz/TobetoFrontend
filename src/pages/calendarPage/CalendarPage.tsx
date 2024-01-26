import React, { useState, useEffect } from 'react';
import Calendar from '../../components/calendar/calendar';
import EducationSearchBar from '../../components/educationSearchBar/educationSearchBar';
import { getLessonCourses, LessonCourse } from '../../services/pages/calendar/LessonCoursesService';
import EducationStatus from '../../components/EducationStatus/EducationStatus';
import './CalendarPage.css';
import TeacherSearchBar from '../../components/teacherSearchBar/TeacherSearchBar';


const CalendarPage: React.FC = () => {
  const [lessonCourses, setLessonCourses] = useState<LessonCourse[]>([]);
  const [filteredLessonCourses, setFilteredLessonCourses] = useState<LessonCourse[]>([]);
  const [teachers, setTeachers] = useState<string[]>([]);

  useEffect(() => {
    const fetchLessonCourses = async () => {
      try {
        const lessonCoursesData = await getLessonCourses();
        setLessonCourses(lessonCoursesData);
        setFilteredLessonCourses(lessonCoursesData);

        const uniqueTeachers: string[] = [];
        lessonCoursesData.forEach(course => {
          if (!uniqueTeachers.includes(course.instructorName)) {
            uniqueTeachers.push(course.instructorName);
          }
        });
        setTeachers(uniqueTeachers);

      } catch (error) {
        console.error('Error fetching lesson courses:', error);
      }
    };

    fetchLessonCourses();
  }, []);

   const handleSearch = (searchTerm: string) => {
    const filteredCourses = lessonCourses.filter((lessonCourse) =>
      lessonCourse.courseName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLessonCourses(filteredCourses);
  };


 const handleEducationStatusFilter = (status: string) => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Set the time to the beginning of the day

  let filteredCourses: LessonCourse[] = [];

  switch (status) {
    case 'past':
      filteredCourses = lessonCourses.filter(
        (course) => {
          const lessonDate = new Date(course.lessonTime);
          console.log("Lesson Date:", lessonDate);
          console.log("Current Date:", currentDate);
          return lessonDate < currentDate;
        }
      );
      break;
    case 'current':
      filteredCourses = lessonCourses.filter(
        (course) => {
          const lessonDate = new Date(course.lessonTime);
          console.log("Lesson Date:", lessonDate);
          console.log("Current Date:", currentDate);
          return lessonDate >= currentDate && lessonDate < new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
        }
      );
      break;
    case 'future':
      filteredCourses = lessonCourses.filter(
        (course) => {
          const lessonDate = new Date(course.lessonTime);
          console.log("Lesson Date:", lessonDate);
          console.log("Current Date:", currentDate);
          return lessonDate >= new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
        }
      );
      break;
    default:
      // No specific status selected, show all courses
      filteredCourses = lessonCourses;
      break;
  }

  console.log("Filtered Courses:", filteredCourses);
  setFilteredLessonCourses(filteredCourses);
};

const handleTeacherSelect = (selectedTeacher: string) => {
  const filteredCourses = lessonCourses.filter(course => course.instructorName === selectedTeacher);
  setFilteredLessonCourses(filteredCourses);
};


return (
  <div className="CalendarPageContainer">
    <div className="CalendarPageLeftSection">
      <h1>Calendar Page</h1>
      <EducationSearchBar onSearch={handleSearch} />
      <div style={{ marginBottom: '20px' }}>
      <h2 style={{ margin: '20px 0' }}>Öğretmen Ara</h2>
      <TeacherSearchBar teachers={teachers} onTeacherSelect={handleTeacherSelect} />

        <h2 style={{ margin: '20px 0' }}>Eğitim Durumu</h2>
        <EducationStatus onFilter={handleEducationStatusFilter} />
      </div>
    </div>
    <div className="CalendarPageRightSection">
      <Calendar lessonCourses={filteredLessonCourses} />
    </div>
  </div>
);
};

export default CalendarPage;