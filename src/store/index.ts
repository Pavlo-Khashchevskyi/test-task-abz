import { configureStore, combineReducers } from "@reduxjs/toolkit";
// Middlewares
import errorMiddleware from "middlewares/errorMiddleware";
// Reducers
import appReducer from './app/appSlice';
import UsersReducer from './users/usersSlice';
import PositionsReducer from './positions/positionsSlice';

const rootReducer = combineReducers({
  app: appReducer,
  users: UsersReducer,
  positions: PositionsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck: false
      }).concat(errorMiddleware)
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
