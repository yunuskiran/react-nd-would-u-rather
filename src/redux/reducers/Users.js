import {
  LOAD_USERS,
  ASSIGN_QUESTION_TO_USER,
  SET_ANSWER,
} from "../constants/Users";

const users = (state = {}, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ASSIGN_QUESTION_TO_USER:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat(action.id),
        },
      };
    case SET_ANSWER: {
      return {
        ...state,
        [action.auth]: {
          ...state[action.auth],
          answers: {
            ...state[action.auth].answers,
            [action.questionId]: action.answer,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default users;
