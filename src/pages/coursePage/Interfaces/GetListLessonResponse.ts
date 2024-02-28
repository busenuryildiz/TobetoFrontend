 interface GetListLessonResponse {
	id: number;
	courseId: number;
	name: string;
	content: string | null;
	videoUrl: string;
	lessonDuration: string | null;
	speaker: string | null;
	aboutSpeaker: string | null;
}

export default GetListLessonResponse;