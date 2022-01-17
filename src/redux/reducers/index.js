import { combineReducers } from "redux";
import Users from "./Users";
import Auth from "./Auth";
import Questions from "./Questions";

const reducers = combineReducers({
  users: Users,
  auth: Auth,
  questions: Questions,
});

export default reducers;
