import React from 'react'

const QuestionCard = ({ question, user }) => {
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
                                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" />
                                    {question.optionOne.text}
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                                    {question.optionTwo.text}
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-dark mt-3"
                                style={{ borderRadius: "5px" }}
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
