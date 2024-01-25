// LessonCoursesService.ts

export type LessonCourse = {
    id: number;
    lessonId: number;
    courseId: number;
    courseName: string;
    lessonName: string;
    lessonTime: string;
    instructorName: string;
    classroomName: string;
  };
  
  export const getLessonCourses = async (): Promise<LessonCourse[]> => {
    const response = await fetch('http://localhost:6280/api/LessonCourses/GetList?PageSize=1111');
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch lesson courses');
    }
  
    return data.items;
  };
  