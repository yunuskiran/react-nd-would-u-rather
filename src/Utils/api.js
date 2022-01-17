import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
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

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(authedUser, qid, answer) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
}