import axiosHelper from "../../helpers/axiosHelper";

export interface StudentCourse {
  Id: number;
  StudentId: string;
  CourseId: number;
  Progress: number;
  CertificatePath?: string;
  Point: number;
  Liked: number;
  Saved: number;
  IsPaid: boolean;
  StartDate: string;
  IsCompleted: boolean;
  SpentTime: string;
  EstimatedTime: string;
  Student?: any;
  course: Course;
  Payments?: any;
  CreatedDate: string;
  UpdatedDate?: any;
  DeletedDate?: any;
  // Diğer özellikler buraya eklenebilir
}

export interface Course {
  Id: number;
  CourseLevelId: number;
  SoftwareLanguageId: number;
  CategoryId: number;
  Name: string;
  ImagePath: string;
  Price: number;
  CourseType: string;
  Duration: number;
  Classroom: string;
  BadgePath: string;
  Category: any;
  Assignments: any[];
  Exams: any[];
  CourseLevel: any;
  LessonCourses: any[];
  CourseSubjects: any[];
  SoftwareLanguage: any;
  StudentCourses: StudentCourse[];
  InstructorCourses: any[];
  CourseParts: any[];
  CreatedDate: string;
  UpdatedDate?: any;
  DeletedDate?: any;
  // Diğer özellikler buraya eklenebilir
}

export interface CourseItem {
  Id: number;
  StudentId: string;
  CourseId: number;
  Progress: number;
  course: Course;
}

export interface CourseData {
  $id: string;
  $values: CourseItem[];
}

export interface PaginationData {
  $id: string;
  From: number;
  Index: number;
  Size: number;
  Count: number;
  Pages: number;
  Items: CourseData;
  HasPrevious: boolean;
  HasNext: boolean;
}

// Verileri çekme fonksiyonunu tanımla
export const fetchStudentCourses = async (
  studentId: string,
  pageIndex: number,
  pageSize: number
): Promise<CourseItem[]> => {
  try {
    const apiUrl = `/StudentCourses/get-student-courses?studentId=${studentId}&PageIndex=${pageIndex}&PageSize=${pageSize}`;
    const response = await axiosHelper.get<PaginationData>(apiUrl);
    return response.data.Items.$values; // Doğrudan tüm PaginationData nesnesini döndürüyoruz
  } catch (error) {
    console.error("Hata:", error);
    throw error;
  }
};
