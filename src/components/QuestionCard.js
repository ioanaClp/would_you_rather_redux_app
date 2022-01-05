import React from 'react'

const QuestionCard = () => {
    return (
        <div className="container">
            <div className="card my-3 p-3">
                <div className="row g-0">
                    <h3 className="m-3"><span className="user">Sarah Edo</span> asks:</h3>
                    <hr />
                    <div className="col-md-4">
                        <img
                            src="https://i.pinimg.com/736x/6b/b4/9f/6bb49f29001b674c62d095d433979e38.jpg"
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
                                    Option one is this and that—be sure to include why it's great
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                                    Option two can be something else and selecting it will deselect option one
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
