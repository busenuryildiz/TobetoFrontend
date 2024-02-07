import { Action, ThunkAction, combineReducers, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import personalInformationReducer from './slices/personalInformationSlice';
import { skillsReducer } from './slices/mySkillSlice';

const rootReducer = combineReducers({
  personalInformation: personalInformationReducer,
  skills: skillsReducer,
  // Diğer slice'larınızı buraya ekleyebilirsiniz
  // Örneğin: user: userReducer
});

export const globalStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof globalStore.getState>;
export type AppDispatch = typeof globalStore.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, null, Action<string>>;

// ThunkDispatch'i kullanarak AppDispatch'i genişletme
export type AppDispatchWithThunk = ThunkDispatch<RootState, void, Action<string>>;
