import React, { useState, useEffect } from 'react';
import Calendar from '../../components/calendar/calendar';
import EducationSearchBar from '../../components/calendar/educationSearchBar/educationSearchBar';
import EducationStatus from '../../components/calendar/EducationStatus/EducationStatus';
import './CalendarPage.css';
import { GetAllLessonCourseResponse } from '../../models/responses/lessonCourse/getAllLessonCourseResponse';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/index';
import { getAllLessonCourses } from '../../store/slices/lessonCourseSlice';
import TeacherSearchBar from '../../components/calendar/teacherSearchBar/TeacherSearchBar';
import Navi from '../../components/navbar/Navi';


const CalendarPage: React.FC = () => {
  const dispatch : AppDispatch = useDispatch();
  const lessonCoursesState: GetAllLessonCourseResponse[] | null = useSelector((state: RootState) => state.lessonCourse.lessonCourses);
  // console.log(lessonCoursesState);
  const [filteredLessonCourses, setFilteredLessonCourses] = useState<GetAllLessonCourseResponse[]>([]);
  const [teachers, setTeachers] = useState<string[]>([]);
  
  useEffect(() => {
    dispatch(getAllLessonCourses()); // Tüm dersleri alma eylemini tetikle
  }, [dispatch]);

  useEffect(() => {
    try {
      // If lessonCoursesState is truthy, proceed with operations
      const uniqueTeachersSet = new Set<string>();
      lessonCoursesState.forEach(course => {
        uniqueTeachersSet.add(course.instructorName);
      });
      const uniqueTeachers = Array.from(uniqueTeachersSet);
  
      // Set filteredLessonCourses and teachers
      setFilteredLessonCourses(lessonCoursesState);
      setTeachers(uniqueTeachers);
    } catch (error) {
      // Handle the case where lessonCoursesState is falsy or an error occurs
      console.error("An error occurred while processing lessonCoursesState:", error);
    }
  }, [lessonCoursesState]);  
  

   const handleSearch = (searchTerm: string) => {
    const filteredCourses = lessonCoursesState.filter((lessonCourse) =>
      lessonCourse.courseName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLessonCourses(filteredCourses);
  };

  const handleSearchTeacher = (searchTerm: string) => {
    const filteredCourses = lessonCoursesState.filter((lessonCourse) =>
      lessonCourse.instructorName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLessonCourses(filteredCourses);
  };

 const handleEducationStatusFilter = (status: string) => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Set the time to the beginning of the day

  let filteredCourses: GetAllLessonCourseResponse[] = [];

  switch (status) {
    case 'past':
      filteredCourses = lessonCoursesState.filter(
        (course) => {
          const lessonDate = new Date(course.lessonTime);
          console.log("Lesson Date:", lessonDate);
          console.log("Current Date:", currentDate);
          return lessonDate < currentDate;
        }
      );
      break;
    case 'current':
      filteredCourses = lessonCoursesState.filter(
        (course) => {
          const lessonDate = new Date(course.lessonTime);
          console.log("Lesson Date:", lessonDate);
          console.log("Current Date:", currentDate);
          return lessonDate >= currentDate && lessonDate < new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
        }
      );
      break;
    case 'future':
      filteredCourses = lessonCoursesState.filter(
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
      filteredCourses = lessonCoursesState;
      break;
  }

  console.log("Filtered Courses:", filteredCourses);
  setFilteredLessonCourses(filteredCourses);
};

const handleTeacherSelect = (selectedTeacher: string) => {
  const filteredCourses = lessonCoursesState.filter(course => course.instructorName === selectedTeacher);
  setFilteredLessonCourses(filteredCourses);
};


return (
  <div>
    <Navi/>
  <div className="CalendarPageContainer mt-5">
    <div className="CalendarPageLeftSection">
      <h1>Calendar Page</h1>
      <EducationSearchBar onSearch={handleSearch} />
      <div style={{ marginBottom: '20px' }}>
      <h2 style={{ margin: '20px 0' }}>Öğretmen Ara</h2>
      <TeacherSearchBar teachers={teachers} onTeacherSelect={handleTeacherSelect} onSearch={handleSearchTeacher} />

        <h2 style={{ margin: '20px 0' }}>Eğitim Durumu</h2>
        <EducationStatus onFilter={handleEducationStatusFilter} />
      </div>
    </div>
    <div className="CalendarPageRightSection">
      <Calendar lessonCourses={filteredLessonCourses} />
    </div>
  </div>
  </div>
);
};

export default CalendarPage;