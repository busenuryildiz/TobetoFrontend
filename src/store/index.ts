import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from './slices'; // Import the persisted reducer
import { persistStore } from 'redux-persist';

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


// Create a persistor object to persist the store
export const persistor = persistStore(store);
