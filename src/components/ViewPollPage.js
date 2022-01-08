import React from "react";
import { useParams } from "react-router-dom";
import QuestionCard from "./QuestionCard";
import { useSelector } from 'react-redux'
import NotFoundPage from "./NotFoundPage";

const ViewPollPage = () => {
    let { questionId } = useParams();

    const questions = useSelector((store) => store.questions)
    const users = useSelector((store) => store.users)
    const question = questions[questionId]

    if (!question) {
        return <NotFoundPage />
    }

    return (
        <div>
            <QuestionCard question={question} user={users[question.author]} />
        </div>
    )
}

export default ViewPollPage
