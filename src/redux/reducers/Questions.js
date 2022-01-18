import {
  ADD_QUESTION,
  LOAD_QUESTIONS,
  ADD_ANSWER_TO_QUESTION,
} from "../constants/Questions";

const questions = (state = {}, action) => {
  switch (action.type) {
    case LOAD_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ADD_ANSWER_TO_QUESTION: {
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.answer]: {
            ...state[action.questionId][action.answer],
            votes: state[action.questionId][action.answer].votes.concat(
              action.auth
            ),
          },
        },
      };
    }
    default:
      return state;
  }
};

export default questions;
