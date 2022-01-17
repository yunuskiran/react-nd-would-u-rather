import {
  ASSIGN_QUESTION_TO_USER,
  LOAD_USERS,
  SET_ANSWER,
} from "../constants/Users";
import { getUsers, saveQuestionAnswer } from "../../Utils/api";
import { hanleAddQuestionAnswer } from "./Questions";

export const loadUser = () => {
  return (dispatch) => {
    return getUsers().then(({ users }) => {
      dispatch(handleLoadUser(users));
    });
  };
};

function handleLoadUser(users) {
  return {
    type: LOAD_USERS,
    users,
  };
}

export function handleAssingQuesitonToUser({ id, author }) {
  return {
    type: ASSIGN_QUESTION_TO_USER,
    id,
    author,
  };
}

function handleAddAnswer(auth, questionId, answer) {
  return {
    type: SET_ANSWER,
    auth,
    questionId,
    answer,
  };
}

export function addAnswer(auth, questionId, answer) {
  return (dispatch) => {
    saveQuestionAnswer(auth, questionId, answer).then((result) => {
      dispatch(handleAddAnswer(auth, questionId, answer));
      dispatch(hanleAddQuestionAnswer(auth, questionId, answer));
    });
  };
}
