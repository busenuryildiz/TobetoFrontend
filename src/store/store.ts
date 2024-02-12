import  storage  from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from './slices';


const persistConfig = {
  key: 'root',
  storage,
  // Optionally, you can blacklist or whitelist specific reducers
  // blacklist: ['loading'],
  // whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


// Create a persistor object to persist the store
export const persistor = persistStore(store);
