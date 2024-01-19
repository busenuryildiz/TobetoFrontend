import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:6280/api',
});

export default axiosInstance;