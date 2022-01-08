import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function saveNewQuestion(question) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(authedUserId, questionId, option) {
  return _saveQuestionAnswer({
    authedUser: authedUserId,
    qid: questionId,
    answer: option,
  });
}
