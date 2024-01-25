import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { personalInformationReducer } from './slices/personalInformationSlice';
import { courseReducer } from './slices/courseSlice';

const rootReducer = combineReducers({
  personalInformation: personalInformationReducer,
  course:courseReducer,
});

export const globalStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof globalStore.getState>;
export type AppDispatch = typeof globalStore.dispatch;