export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const CREATE_NEW_QUESTION = "CREATE_NEW_QUESTION"
export const ANSWER_QUESTION = "ANSWER_QUESTION"

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function createNewQuestion(question) {
    return {
        type: CREATE_NEW_QUESTION,
        question
    }
}

export function answerQuestion(question, user, option) {
    return {
        type: ANSWER_QUESTION,
        question,
        user,
        option
    }
}