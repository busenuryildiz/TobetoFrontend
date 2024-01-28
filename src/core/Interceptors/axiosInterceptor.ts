import axios from "axios";
import {handleError} from "../errorHandlers/errorHandlers";
import { BASE_API_URL } from "../../enviroment/enviroment";
import {addRequest, removeRequest} from "../../store/slices/loadingSlice";
import tokenService from "../services/tokenService";
import {globalStore} from "../../store/configureStore";

const axiosInstance = axios.create({
	baseURL: BASE_API_URL,
});

axiosInstance.interceptors.request.use(config => {
	globalStore.dispatch(addRequest());

	const token = tokenService.getToken();
	config.headers.Authorization = "Bearer " + token;
	return config;
});

axiosInstance.interceptors.response.use(
	response => {
		globalStore.dispatch(removeRequest());
		return response;
	},
	error => {
		handleError(error);
		globalStore.dispatch(removeRequest());
		return error;
	},
);
export default axiosInstance;