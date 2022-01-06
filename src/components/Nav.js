import React, { Fragment } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setAuthedUser } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";

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
                                <a className="nav-link active" href="/">Home
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className="nav-link" href="/add">New Question</a>
                            </li>
                            <li className='nav-item'>
                                <a className="nav-link" href="/leaderboard">Leader Board</a>
                            </li>
                        </ul>
                    </div>

                    <div className='container-fluid justify-content-end'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className="nav-link" href="#">Hi, <span>{currentUser.name}!</span></a>
                            </li>
                            <li className='nav-item'>
                                <a className="nav-link" href="/login" onClick={(e) => {
                                    e.preventDefault()
                                    dispatch(setAuthedUser(null))
                                    navigate(`/login`);
                                }}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </Fragment>
            }

        </nav>
    )
}

export default Nav
