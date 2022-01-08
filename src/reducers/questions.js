import {
  RECEIVE_QUESTIONS,
  CREATE_NEW_QUESTION,
  ANSWER_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case CREATE_NEW_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.question.id]: {
          ...state[action.question.id],
          [action.option]: {
            ...state[action.question.id][action.option],
            votes: state[action.question.id][action.option].votes.concat([
              action.user.id,
            ]),
          },
        },
      };
    default:
      return state;
  }
}
