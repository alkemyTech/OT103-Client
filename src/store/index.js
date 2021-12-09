import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
<<<<<<< HEAD

import activitiesReducer from "./slices/activitiesSlice";
// Put reducers here
const reducers = {
   activitiesReducer,
=======
import authSlice from "./slices/authSlice";
// nosotros reducer
import { membersReducer } from "./reducers/membersReducers";
import aboutReducer from "./slices/aboutSlice";
import activitiesReducer from "./slices/activitiesSlice";
// Put reducers here
const reducers = {
  aboutData: aboutReducer,
  members: membersReducer,
  authReducer: authSlice,
  activities: activitiesReducer,
>>>>>>> 871d9c0fa2da5cfa2f8a004ef74b3b501676be29
};

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
  devTools: true,
});

export default store;
