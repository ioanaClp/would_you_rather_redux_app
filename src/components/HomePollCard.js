import React from 'react'

const HomePollCard = ({ question, user }) => {
    return (
        <div>
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
                        <div className="col-md-8 mt-5">
                            <h3 className="my-3">Would you rather..</h3>
                            <p className="my-3">...{question.optionOne.text}...</p>
                            <button
                                type="submit"
                                className="btn btn-dark mt-3"
                                style={{ borderRadius: "5px" }}
                            >View Poll
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePollCard
