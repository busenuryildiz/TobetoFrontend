import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { personalInformationReducer } from './slices/personalInformationSlice';

const rootReducer = combineReducers({
  personalInformation: personalInformationReducer,
  // Diğer slice'larınızı buraya ekleyebilirsiniz
  // Örneğin: user: userReducer
});

export const globalStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof globalStore.getState>;
export type AppDispatch = typeof globalStore.dispatch;