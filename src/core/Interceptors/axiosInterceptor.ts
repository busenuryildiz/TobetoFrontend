import axios from "axios";
import {handleError} from "../errorHandlers/errorHandlers";
import { BASE_API_URL } from "../../enviroment/enviroment";
import {addRequest, removeRequest} from "../../store/slices/loadingSlice";
import tokenService from "../services/tokenService";
import {store} from "../../store"

const axiosInstance = axios.create({
	baseURL: "https://ws.tobeto1cpair3.com.tr/api/"
});

axiosInstance.interceptors.request.use(config => {
	store.dispatch(addRequest());

	const token = tokenService.getToken();
	config.headers.Authorization = "Bearer " + token;
	return config;
});

axiosInstance.interceptors.response.use(
	response => {
		store.dispatch(removeRequest());
		return response;
	},
	error => {
		handleError(error);
		store.dispatch(removeRequest());
		return error;
	},
);
export default axiosInstance;