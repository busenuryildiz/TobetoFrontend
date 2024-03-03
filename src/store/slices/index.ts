import { combineReducers  } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


import { courseReducer } from './courseSlice';
import { loadingReducer } from './loadingSlice';
//import { skillsReducer } from './mySkillSlice';
import authReducer from './authSlice';
import { chartDataReducer } from './chartDataSlice';

// Root reducer
const rootReducer = combineReducers({
  course: courseReducer,
  loading: loadingReducer,
  auth: authReducer,
  chartData: chartDataReducer,
  //skill: skillsReducer,
});


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export default persistedReducer;

