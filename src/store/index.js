import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import activitiesReducer from "./slices/activitiesSlice";
// Put reducers here
const reducers = {
  activitiesData: activitiesReducer,
};

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
  devTools: true,
});

export default store;
