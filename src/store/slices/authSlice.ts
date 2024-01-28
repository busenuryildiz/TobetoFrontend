import {createSlice} from "@reduxjs/toolkit";
import tokenService from "../../core/services/tokenService";

const getInitialState = () => {
	if (tokenService.hasToken()) return {isAuthenticated: true};

	return {isAuthenticated: false};
};

const authSlice = createSlice({
	name: "auth",
	initialState: getInitialState(),
	reducers: {},
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;