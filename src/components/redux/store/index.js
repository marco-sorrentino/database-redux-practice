import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducer";
import listReducer from "../reducer/listReducer";
import userReducer from "../reducer/userReducer";

const bigReducer = combineReducers({
  list: listReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
