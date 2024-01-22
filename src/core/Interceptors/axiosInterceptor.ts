import axios from 'axios';
import { BASE_API_URL } from '../../enviroment/enviroment';

const axiosInstance = axios.create({
	baseURL: BASE_API_URL,
});

export default axiosInstance;