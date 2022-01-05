import React from "react";

const Nav = () => {
    return (
        <nav className='header navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className="container-fluid">
                <a className="navbar-brand h6" href="#">WouldYouRatherApp</a>
            </div>
            <div className='container justify-content-center'>
                <ul className='navbar-nav'>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home
                            <span className="visually-hidden">(current)</span>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className="nav-link" href="#">New Question</a>
                    </li>
                    <li className='nav-item'>
                        <a className="nav-link" href="#">Leader Board</a>
                    </li>
                </ul>
            </div>
            <div className='container-fluid justify-content-end'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <a className="nav-link" href="#">Hi, <span>user</span></a>
                    </li>
                    <li className='nav-item'>
                        <a className="nav-link" href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
