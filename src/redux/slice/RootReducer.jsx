import { combineReducers } from "@reduxjs/toolkit";
import BaseSlice from "./BaseSlice";
import FunctionalSlice from "./FunctionalSlice";

export const rootReducer = combineReducers({
  BaseSlice: BaseSlice,
  FunctionalSlice: FunctionalSlice,
});

export default rootReducer;
