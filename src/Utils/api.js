import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  _getQuestion,
} from "./_DATA.js";

export function getUsers() {
  return Promise.all([_getUsers()]).then(([users]) => ({
    users,
  }));
}

export function getQuestions() {
  return Promise.all([_getQuestions()]).then(([questions]) => ({
    questions,
  }));
}

export function getQuestion(id) {
  return Promise.all([_getQuestion(id)]).then(([question]) => ({
    question,
  }));
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(authedUser, qid, answer) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
}
