import GetListLessonResponse from "./GetListLessonResponse";
import GetListStudentLessonResponse from "./GetListStudentLessonResponse";

interface CoursesAllLessonInfoResponse {
	courseId: number;
	studentCourseId: number;
	studentId: string;
	courseName: string | null;
	courseImagePath:string | null;
	point: number | null;
	areasOfInterest: string | null;
	studentCourseIsLiked: number | null;
	studentCourseIsSaved: number | null;
	studentCourseProgress: number | null;
	courseProducerCompany: string | null;
	courseCategoryNames: string | null;
	studentCourseStartDate: string;
	studentCourseSpentTime: string;
	studentCourseEstimatedTime: string;
	getListLessonResponses: GetListLessonResponse[] | null;
	getListStudentLessonResponses: GetListStudentLessonResponse[] | null;
}

export default CoursesAllLessonInfoResponse;