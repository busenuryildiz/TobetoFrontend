import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { personalInformationReducer } from './slices/personalInformationSlice';
import { courseReducer } from './slices/courseSlice';
import { loadingReducer } from './slices/loadingSlice';
import { authReducer } from './slices/authSlice';
import { lessonCourseReducer } from './slices/lessonCourseSlice';

const rootReducer = combineReducers({
  personalInformation: personalInformationReducer,
  course:courseReducer,
  loading: loadingReducer,
  auth: authReducer,
  lessonCourse : lessonCourseReducer,
});

export const globalStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof globalStore.getState>;
export type AppDispatch = typeof globalStore.dispatch;