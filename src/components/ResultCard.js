import React from 'react'

const ResultCard = () => {
    return (
        <div className="container">
            <div className="card my-3 p-3">
                <div className="row g-0">
                    <h3 className="m-3">Asked by <span className="user">Sarah Edo:</span></h3>
                    <hr />
                    <div className="col-md-4">
                        <img
                            src="https://i.pinimg.com/736x/6b/b4/9f/6bb49f29001b674c62d095d433979e38.jpg"
                            className="img-fluid rounded-start my-3 mx-5 w-50"
                            alt="..." />
                    </div>
                    <div className="col-md-8">
                        <h3 className="mt-4">Results:</h3>
                        <p>Would you rather...</p>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated"
                                role="progressbar"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "66.7%" }}>
                            </div>
                        </div>
                        <p>2 out of 3 votes</p>
                        <p>Would you rather...</p>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated"
                                role="progressbar"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "33.3%" }}>
                            </div>
                        </div>
                        <p>1 out of 3 votes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultCard
