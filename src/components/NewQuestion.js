import React, { useState } from "react";
import { formatQuestion } from "../utils/_DATA";
import { useDispatch, useSelector } from 'react-redux';
import { createNewQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const NewQuestion = () => {
    const [inputValueOne, setInputValueOne] = useState('');
    const [inputValueTwo, setInputValueTwo] = useState('');
    const userId = useSelector((store) => store.authedUser);
    const users = useSelector((store) => store.users);
    const user = users[userId]
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleClickAddQuestion = (e) => {
        e.preventDefault()

        if (inputValueOne === "") {
            alert("First input is empty!")
        }

        if (inputValueTwo === "") {
            alert("Second input is empty!")
        }

        const newQuestion = formatQuestion({ optionOneText: inputValueOne, optionTwoText: inputValueTwo, author: user.id });
        console.log(newQuestion)

        dispatch(createNewQuestion(newQuestion))
        navigate(`/`);
    }

    return (
        <div className="container">
            <h3 className="my-5">Create New Question</h3>
            <form className="form">
                <p>Complete the Question: </p>
                <h4>Would you rather..</h4>
                <input
                    id="first-option"
                    className="form-control mb-3"
                    style={{ fontSize: "18px" }}
                    type="text"
                    placeholder="Type First Option..."
                    value={inputValueOne}
                    onChange={(e) => setInputValueOne(e.target.value)}
                />
                <h4>Or..</h4>
                <input
                    id="second-option"
                    className="form-control mb-3"
                    style={{ fontSize: "18px" }}
                    type="text"
                    placeholder="Type Second Option..."
                    value={inputValueTwo}
                    onChange={(e) => setInputValueTwo(e.target.value)}
                />
                <button
                    type="submit"
                    className="btn btn-dark"
                    style={{ borderRadius: "5px" }}
                    onClick={handleClickAddQuestion}
                >Submit
                </button>
            </form>
        </div>
    )
}

export default NewQuestion
