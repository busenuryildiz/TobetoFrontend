interface Course {
    courseId: number;
    studentCourseId: number,
    courseName: string;
    courseDate: Date;
    courseImagePath: string | null;
    studentCourseProgress: number | null;
  }

  export default Course;