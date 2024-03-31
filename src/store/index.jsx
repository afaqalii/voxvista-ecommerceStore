import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./reducers/AuthSlice";
import UISlice from "./reducers/UISlice";

const rootReducer = {
  auth: AuthSlice,
  UI: UISlice,
};

export const store = configureStore({
  reducer: rootReducer,
});
