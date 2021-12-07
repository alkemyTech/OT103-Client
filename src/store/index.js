import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { membersReducer } from "./reducers/membersReducers";
// Put reducers here
const reducers = {
  members: membersReducer,
};

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
  devTools: true,
});

export default store;
