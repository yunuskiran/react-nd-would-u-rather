import { LOGIN } from "../constants/Auth";

export const setLogin = (id) => {
  return (dispatch) => {
    return dispatch(login(id));
  };
};

export function login(id) {
  return {
    type: LOGIN,
    id,
  };
}
