import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllStudentsInterface from './AllStudentsInterface';
import AssignCourseRequestInterface from './AssignCourseRequestInterface';
import './CourseManagementPanel.css';
import StudentsNotRegisteredCourses from './StudentsNotRegisteredCourses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_API_URL } from '../../../enviroment/enviroment';

const CourseManagementPanel = () => {
  const [students, setStudents] = useState<AllStudentsInterface[]>([]);
  const [courses, setCourses] = useState<StudentsNotRegisteredCourses[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<number>(0);

  useEffect(() => {
    axios.get<AllStudentsInterface[]>(`${BASE_API_URL}Students/GetAllStudents`)
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });

    axios.get<StudentsNotRegisteredCourses[]>(`${BASE_API_URL}StudentCourses/GetListStudentsNotRegisteredCourses?studentId=${selectedStudent}`)
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, [selectedStudent, selectedCourse]);

  const handleStudentChange = (event:any) => {
    setSelectedStudent(event.target.value);
  };

  const handleCourseChange = (event:any) => {
    setSelectedCourse(event.target.value);
  };

  const assignCourseToStudent = () => {
    const requestData:AssignCourseRequestInterface  = {
      studentId: selectedStudent,
      courseId: selectedCourse,
    };

    axios.post(`${BASE_API_URL}StudentCourses/add`, requestData)
      .then(response => {
        console.log('Course assigned successfully:', response.data);
        
        setCourses(courses.filter(course => course.courseId !== selectedCourse));
        setSelectedCourse(0);

        toast.success('Course assigned successfully');
      })
      .catch(error => {
        console.error('Error assigning course to student:', error);

        toast.error('Error assigning course to student');

      });
  };

  return (
    <div className="coursemanagement-container">
      <div className="coursemanagement-select-container">
        <label className='coursemanagement-label' htmlFor="studentSelect">Select Student:</label>
        <select className='coursemanagement-select' id="studentSelect" value={selectedStudent} onChange={handleStudentChange}>
          <option value="">Select a student</option>
          {students.map(student => (
            <option key={student.userId} value={student.studentId}>
              {student.firstName} {student.lastName}
            </option>
          ))}
        </select>
      </div>
      <div className="coursemanagement-select-container">
        <label className='coursemanagement-label' htmlFor="courseSelect">Select Course:</label>
        <select className='coursemanagement-select' id="courseSelect" value={selectedCourse.toString()} onChange={handleCourseChange}>
          <option value="">Select a course</option>
          {courses.map(course => (
            <option key={course.courseId} value={course.courseId.toString()}>
              {course.courseName}
            </option>
          ))}
        </select>
      </div>
      <button className='coursemanagement-button' onClick={assignCourseToStudent}>Assign Course</button>
      <ToastContainer />

    </div>
  );
};

export default CourseManagementPanel;
