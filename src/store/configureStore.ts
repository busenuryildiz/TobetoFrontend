import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { personalInformationReducer } from './slices/personalInformationSlice';

const rootReducer = combineReducers({
  personalInformation: personalInformationReducer,
});

export const globalStore = configureStore({
  reducer: rootReducer,
});