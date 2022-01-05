import React from "react";

const NewQuestion = () => {
    return (
        <div className="container">
            <h3 className="my-5">Create New Question</h3>
            <form className="form">
                <p>Complete the Question:</p>
                <h4>Would you rather..</h4>
                <input
                    id="first-option"
                    className="form-control mb-3"
                    style={{ fontSize: "18px" }}
                    type="text"
                    placeholder="Type First Option..."
                />
                <h4>Or..</h4>
                <input
                    id="second-option"
                    className="form-control mb-3"
                    style={{ fontSize: "18px" }}
                    type="text"
                    placeholder="Type Second Option..."
                />
                <button
                    type="submit"
                    className="btn btn-dark"
                    style={{ borderRadius: "5px" }}
                >Submit
                </button>
            </form>
        </div>
    )
}

export default NewQuestion
