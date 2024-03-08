import { BASE_API_URL } from "../../enviroment/enviroment";
import axiosHelper from "../../helpers/axiosHelper";

const BASE_URL = `${BASE_API_URL}Courses/GetById`;

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
