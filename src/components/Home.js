import React, { useState } from "react";
import HomePollCard from "./HomePollCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  const [currentCategory, setCurrentCategory] = useState("unanswered");

  const questions = useSelector((store) => store.questions);
  const users = useSelector((store) => store.users);
  const authedUserId = useSelector((store) => store.authedUser);

  const currentUser = users[authedUserId];

  const handleShowAnsweredQuestions = () => {
    setCurrentCategory("answered");
  };

  const handleShowUnansweredQuestions = () => {
    setCurrentCategory("unanswered");
  };

  const handleOnClickViewPoll = (question) => {
    navigate(`/questions/${question.id}`);
  };

  return (
    <div className="container mt-3">
      <ul className="nav nav-pills my-4">
        <li className="nav-item">
          <a
            className={`nav-link ${
              currentCategory === "unanswered" ? "active" : ""
            }`}
            style={{ borderRadius: "5px" }}
            aria-current="page"
            href="#"
            onClick={() => handleShowUnansweredQuestions()}
          >
            Unanswered Questions
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${
              currentCategory === "answered" ? "active" : ""
            }`}
            style={{ borderRadius: "5px" }}
            href="#"
            onClick={() => handleShowAnsweredQuestions()}
          >
            Answered Questions
          </a>
        </li>
      </ul>
      {currentCategory === "answered" ? (
        <div>
          {Object.keys(currentUser.answers)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
            .map((questionId) => {
              const question = questions[questionId];
              return (
                <HomePollCard
                  question={question}
                  user={users[question.author]}
                  onClickViewPoll={() => handleOnClickViewPoll(question)}
                  key={question.id}
                />
              );
            })}
        </div>
      ) : (
        <div>
          {Object.values(questions)
            .sort((a, b) => b.timestamp - a.timestamp)
            .filter((question) => {
              // The list of ids for which the current login user has answered
              const allQuestionIdsThatWereAnswered = Object.keys(
                currentUser.answers
              );

              // Check if the current question is part of the answered list
              const hasAnsweredThisQuestion =
                allQuestionIdsThatWereAnswered.includes(question.id);

              // If the current question is part of the answered list it means that is not part of unanswered list
              if (hasAnsweredThisQuestion) {
                return false;

                // otherwise is part of unaswered list so we keep it in the list
              } else {
                return true;
              }
            })
            .map((question) => (
              <HomePollCard
                question={question}
                user={users[question.author]}
                onClickViewPoll={() => handleOnClickViewPoll(question)}
                key={question.id}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
