import { combineReducers } from "redux";
import { math } from "./mathReducer";
import {math2} from "./math2";
const reducers = combineReducers({
  math: math,
  math2:math2,
});
export default reducers;
