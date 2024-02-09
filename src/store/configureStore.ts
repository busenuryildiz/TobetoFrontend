import { combineReducers, configureStore } from '@reduxjs/toolkit';
import personalInformationReducer from './slices/personalInformationSlice';
import { courseReducer } from './slices/courseSlice';
import { loadingReducer } from './slices/loadingSlice';
import { authReducer } from './slices/authSlice';
import { lessonCourseReducer } from './slices/lessonCourseSlice';
import { skillsReducer } from './slices/mySkillSlice';

const rootReducer = combineReducers({
  personalInformation: personalInformationReducer,
  course:courseReducer,
  loading: loadingReducer,
  auth: authReducer,
  lessonCourse : lessonCourseReducer,
  skill: skillsReducer,
});

export const globalStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof globalStore.getState>;
export type AppDispatch = typeof globalStore.dispatch;