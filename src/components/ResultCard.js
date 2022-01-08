import React from "react";

const ResultCard = ({ question, authedUserId }) => {
  const totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;

  const optionOneProgressPercentage =
    optionOneVotes === 0 ? 0 : (optionOneVotes / totalVotes) * 100;
  const optionTwoProgressPercentage =
    optionTwoVotes === 0 ? 0 : (optionTwoVotes / totalVotes) * 100;

  const hasAnsweredFirstOption =
    question.optionOne.votes.includes(authedUserId);
  const hasAnsweredSecondOption =
    question.optionTwo.votes.includes(authedUserId);
  return (
    <div className="container">
      <div className="card my-3 p-3">
        <div className="row g-0">
          <h3 className="m-3">
            Asked by <span className="user">Sarah Edo:</span>
          </h3>
          <hr />
          <div className="col-md-4">
            <img
              src="https://i.pinimg.com/736x/6b/b4/9f/6bb49f29001b674c62d095d433979e38.jpg"
              className="img-fluid rounded-start my-3 mx-5 w-50"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <h3 className="mt-3">Results:</h3>

            <p>
              {question.optionOne.text}{" "}
              {hasAnsweredFirstOption && (
                <span className="text-warning">
                  <strong>(Your answer)</strong>
                </span>
              )}
            </p>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: `${optionOneProgressPercentage}%` }}
              ></div>
            </div>
            <p className="mt-2">
              {optionOneVotes} out of {totalVotes} votes
            </p>
            <hr />
            <p>
              {question.optionTwo.text}{" "}
              {hasAnsweredSecondOption && (
                <span className="text-warning">
                  <strong>(Your answer)</strong>
                </span>
              )}
            </p>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: `${optionTwoProgressPercentage}%` }}
              ></div>
            </div>
            <p className="mt-2">
              {optionTwoVotes} out of {totalVotes} votes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
