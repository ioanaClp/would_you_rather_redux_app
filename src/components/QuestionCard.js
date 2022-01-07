import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../actions/questions';

const QuestionCard = ({ question, user }) => {
    const [selectAnOption, setSelectAnOption] = useState();
    const dispatch = useDispatch();

    const authedUserId = useSelector((store) => store.authedUser)
    const users = useSelector((store) => store.users)
    const authedUser = users[authedUserId]

    return (
        <div className="container">
            <div className="card my-3 p-3">
                <div className="row g-0">
                    <h3 className="m-3">{user.name} asks:</h3>
                    <hr />
                    <div className="col-md-4">
                        <img
                            src={user.avatarURL}
                            className="img-fluid rounded-start my-3 mx-5 w-50"
                            alt="..." />
                    </div>
                    <div className="col-md-8">
                        <fieldset className="form-group">
                            <legend className="mt-4">Would You Rather..</legend>
                            <p>Select only one answer.</p>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        name="optionsRadios"
                                        id="optionsRadios1"
                                        value="option1"
                                        onClick={() => setSelectAnOption("optionOne")}
                                    />
                                    {question.optionOne.text}
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        name="optionsRadios"
                                        id="optionsRadios2"
                                        value="option2"
                                        onClick={() => setSelectAnOption("optionTwo")}
                                    />
                                    {question.optionTwo.text}
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-dark mt-3"
                                style={{ borderRadius: "5px" }}
                                onClick={(e) => {
                                    e.preventDefault()

                                    if (selectAnOption) {
                                        dispatch(answerQuestion(question, authedUser, selectAnOption))
                                    } else {
                                        alert("Please choose an option and then submit your answer!")
                                    }

                                }}
                            >Submit
                            </button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard
