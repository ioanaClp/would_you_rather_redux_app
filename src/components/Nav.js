import React, { Fragment } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setAuthedUser } from "../actions/authedUser";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate();

    const currentUser = useSelector((store) => store.authedUser)

    return (
        <nav className='header navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className="container-fluid">
                <a className="navbar-brand h6" href="#">WouldYouRatherApp</a>
            </div>
            {currentUser &&
                <Fragment>
                    <div className='container justify-content-center'>
                        <ul className='navbar-nav'>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home
                                    <span className="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="nav-link" to="/add">New Question</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className="nav-link" to="/leaderboard">Leader Board</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='container-fluid justify-content-end'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className="nav-link" href="#">
                                    <img
                                        src={currentUser.avatarURL}
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top mx-2"
                                        style={{ borderRadius: "20px" }}
                                        alt="" />
                                    Hi, <span>{currentUser.name}!</span></a>
                            </li>
                            <li className='nav-item'>
                                <Link className="nav-link" to="/login" onClick={(e) => {
                                    e.preventDefault()
                                    dispatch(setAuthedUser(null))
                                    navigate(`/login`);
                                }}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </Fragment>
            }

        </nav>
    )
}

export default Nav
