import { combineReducers } from "redux";
import { navReducer } from "./navReducer";
import { repertoireReducer } from "./repertoireReducer";

export const reducers = combineReducers({
  navReducer: navReducer,
  repertoireReducer: repertoireReducer
})