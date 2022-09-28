import { combineReducers } from "redux";
import { handleCount } from "./countReducer";

export const rootReducer = combineReducers({
    handleCount
});