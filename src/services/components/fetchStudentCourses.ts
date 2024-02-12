import axiosHelper from "../../helpers/axiosHelper";

interface Course {
  Id: number;
  Name: string;
  ImagePath: string;
}

const fetchStudentCourses = async (
  studentId: any,
  pageIndex: number,
  pageSize: number
): Promise<Course[]> => {
  try {
    const response = await axiosHelper.get<any>(
      "/StudentCourses/get-student-courses",
      {
        params: {
          studentId: studentId,
          PageIndex: pageIndex,
          PageSize: pageSize,
        },
      }
    );
    const data = response.data;
    // Veriyi uygun formata dönüştürme
    const courses: Course[] =
      data?.Items?.$values.map((item: any) => ({
        Id: item.Id,
        Name: item.course.Name,
        ImagePath: item.course.ImagePath,
      })) ?? [];
    return courses;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    throw error;
  }
};

export default fetchStudentCourses;
