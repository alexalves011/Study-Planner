import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Slices/taskSlice";
import themeReducer from "./Slices/themaSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    theme: themeReducer,
  },
});
