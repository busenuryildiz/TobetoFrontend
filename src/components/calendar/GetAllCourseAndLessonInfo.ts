import InstructorFirstAndLastName from "./InstructorFirstAndLastName";

 interface GetAllCourseAndLessonInfo {
	courseName: string | null;
	courseClassroom: string | null;
	lessonDateAndHour: string | null;
	instructorFirstAndLastNames: InstructorFirstAndLastName[] | null;
}
export default GetAllCourseAndLessonInfo