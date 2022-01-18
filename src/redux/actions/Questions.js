import {
  LOAD_QUESTIONS,
  ADD_QUESTION,
  ADD_ANSWER_TO_QUESTION,
} from "../constants/Questions";
import { getQuestions, getQuestion } from "../../Utils/api";
import { _saveQuestion } from "../../Utils/_DATA";
import { handleAssingQuesitonToUser } from "./Users";

export const loadQuestions = () => {
  return (dispatch) => {
    return getQuestions().then(({ questions }) => {
      dispatch(handleLoadQuestions(questions));
    });
  };
};

function handleLoadQuestions(questions) {
  return {
    type: LOAD_QUESTIONS,
    questions,
  };
}

function handleaddQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function AddQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return _saveQuestion({ optionOneText, optionTwoText, author }).then(
      (question) => {
        dispatch(handleaddQuestion(question));
        dispatch(handleAssingQuesitonToUser(question));
      }
    );
  };
}

export function hanleAddQuestionAnswer(auth, questionId, answer) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    auth,
    questionId,
    answer,
  };
}

export function getQuestionById(id) {
  return getQuestion(id).then(({ question }) => {
    return question;
  });
}
