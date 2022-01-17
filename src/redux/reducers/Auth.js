import { LOGIN } from "../constants/Auth";

export default function login(state = null, action) {
  switch (action.type) {
    case LOGIN:
      return action.id;
    default:
      return state;
  }
}
