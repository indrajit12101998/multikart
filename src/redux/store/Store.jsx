import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../slice/RootReducer";

export const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
