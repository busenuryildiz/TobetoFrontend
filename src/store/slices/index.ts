import { combineReducers  } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


import { courseReducer } from './courseSlice';
import { loadingReducer } from './loadingSlice';
import { lessonCourseReducer } from './lessonCourseSlice';
import { skillsReducer } from './mySkillSlice';
import authReducer from './authSlice';

// Root reducer
const rootReducer = combineReducers({
  course: courseReducer,
  loading: loadingReducer,
  auth: authReducer,
  lessonCourse: lessonCourseReducer,
  skill: skillsReducer,
});

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
  // Optionally, you can blacklist or whitelist specific reducers
  // blacklist: ['loading'],
  // whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export default persistedReducer;



// export const globalStore = configureStore({
//   reducer: rootReducer,
// });

// export type RootState = ReturnType<typeof globalStore.getState>;
// export type AppDispatch = typeof globalStore.dispatch;