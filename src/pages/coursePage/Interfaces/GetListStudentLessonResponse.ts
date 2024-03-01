 interface GetListStudentLessonResponse {
	id: number;
	lessonId: number;
	studentId: string;
	isLiked: boolean | null;
	progress: number | null;
}

export default GetListStudentLessonResponse;