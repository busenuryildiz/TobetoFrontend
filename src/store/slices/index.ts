import { combineReducers  } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import personalInformationReducer from './personalInformationSlice';
import { courseReducer } from './courseSlice';
import { loadingReducer } from './loadingSlice';
import { authReducer } from './authSlice';
import { lessonCourseReducer } from './lessonCourseSlice';
import { skillsReducer } from './mySkillSlice';

// Root reducer
const rootReducer = combineReducers({
  personalInformation: personalInformationReducer,
  course: courseReducer,
  loading: loadingReducer,
  auth: authReducer,
  lessonCourse: lessonCourseReducer,
  skill: skillsReducer,
});

export default rootReducer;

// Configuration for redux-persist




// export const globalStore = configureStore({
//   reducer: rootReducer,
// });

// export type RootState = ReturnType<typeof globalStore.getState>;
// export type AppDispatch = typeof globalStore.dispatch;