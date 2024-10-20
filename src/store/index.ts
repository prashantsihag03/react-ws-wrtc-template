import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { socketMiddleware } from "./middleware/Socket";
import { io } from "socket.io-client";

export const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      socketMiddleware(io("/", { autoConnect: false }))
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
