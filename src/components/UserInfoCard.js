import React from "react";

const UserInfoCard = () => {
    return (
        <div className="container">
            <div className="card my-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src="https://i.pinimg.com/736x/6b/b4/9f/6bb49f29001b674c62d095d433979e38.jpg"
                            className="img-fluid rounded-start my-5 mx-5 w-50"
                            alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body m-3">
                            <h3 className="card-title">1st Place</h3>
                            <hr />
                            <h3 className="card-title">Sarah Edo</h3>
                            <p className="card-text">Answered questions: <span className="answered-questions">9</span></p>
                            <p className="card-text">Created questions: <span className="created-questions">3</span></p>
                            <hr />
                            <h3>Score: <span className="score">10</span> points</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfoCard
