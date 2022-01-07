import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <section className="vh-100 mt-3">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img
                            src="https://i.pinimg.com/564x/8c/4a/22/8c4a2209b5734595bf57aec025ec82db.jpg"
                            className="img-fluid"
                            alt="NotFoundPage Image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <h3 className="mb-3">Awww..Don't cry.</h3>
                        <p>It's just a 404 Eroor!</p>
                        <p></p>
                        <Link to="/">
                            <button
                                type="submit"
                                className="btn btn-dark mt-3"
                                style={{ borderRadius: "5px" }}
                            >
                                Back To Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFoundPage
