import { combineReducers  } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


import { courseReducer } from './courseSlice';
import { loadingReducer } from './loadingSlice';
//import { skillsReducer } from './mySkillSlice';
import authReducer from './authSlice';

// Root reducer
const rootReducer = combineReducers({
  course: courseReducer,
  loading: loadingReducer,
  auth: authReducer,
  //skill: skillsReducer,
});


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export default persistedReducer;

