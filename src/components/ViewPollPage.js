import React, { useState } from "react";
import { useParams } from "react-router-dom";
import QuestionCard from "./QuestionCard";
import { useSelector, useDispatch } from 'react-redux'
import NotFoundPage from "./NotFoundPage";
import { answerQuestion } from '../actions/questions';
import ResultCard from "./ResultCard"

const ViewPollPage = ({ isAnwered }) => {
    let { questionId } = useParams();
    const dispatch = useDispatch()

    const authedUserId = useSelector(store => store.authedUser)
    const questions = useSelector((store) => store.questions)
    const users = useSelector((store) => store.users)

    const question = questions[questionId]
    const [hasClickedAnswer, setHasClickedAnswer] = useState(false)

    const hasAnsweredBefore = question && (question.optionOne.votes.includes(authedUserId) || question.optionTwo.votes.includes(authedUserId))

    const onQuestionAnswered = (question, authedUser, selectAnOption) => {
        dispatch(answerQuestion(question, authedUser, selectAnOption))
        setHasClickedAnswer(true)
    }

    if (!question) {
        return <NotFoundPage />
    }

    return (
        <div>
            {!hasClickedAnswer && !hasAnsweredBefore
                ?
                <QuestionCard question={question} user={users[question.author]} onQuestionAnswered={onQuestionAnswered} />
                : <ResultCard question={question} authedUserId={authedUserId} />
            }
        </div>
    )
}

export default ViewPollPage
