import axiosHelper from "../../helpers/axiosHelper";

const BASE_URL = "http://localhost:6280/api/Courses/GetById";

const fetchCourseDetail = async (id) => {
  try {
    const response = await axiosHelper.get(`${BASE_URL}?id=${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching course detail:", error);
    throw error; // Optional: You can handle errors differently if needed
  }
};

export default fetchCourseDetail;
