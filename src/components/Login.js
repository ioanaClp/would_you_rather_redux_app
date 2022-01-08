import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setAuthedUser } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";
import { saveLoginToLocalStorage } from "../utils/persistance"
import { redirectAfterLogin } from "../actions/navigation"

const Login = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate();

    const users = useSelector((store) => store.users)
    const afterLoginNavigation = useSelector((store) => store.navigation)
    const [selectedUser, setSelectedUser] = useState()

    const handleLogInClick = (userId) => {
        const user = users[userId]
        setSelectedUser(user)
    }

    return (
        // <section className="vh-100 mt-3">
        <section className="mt-3">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img
                            src="https://i.pinimg.com/564x/93/64/ae/9364ae370f7b3886669313eec8380797.jpg"
                            className="img-fluid"
                            alt="Login image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <h3 className="mb-5">Welcome to Would You Rather App</h3>
                        <form>
                            <div className="form-group">
                                <h5>Sign In:</h5>
                                <select onChange={(e) => handleLogInClick(e.target.value)} multiple="" className="form-select" id="signin-as">
                                    {Object.values(users).map((user) =>
                                        <option
                                            key={user.id}
                                            value={user.id}
                                        >{user.name}</option>
                                    )}
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-dark mt-5"
                                style={{ borderRadius: "5px" }}
                                onClick={(e) => {
                                    e.preventDefault()
                                    let user = selectedUser;

                                    if (!selectedUser) {
                                        user = Object.values(users)[0]
                                    }

                                    saveLoginToLocalStorage(user.id)
                                    dispatch(setAuthedUser(user.id))

                                    if (afterLoginNavigation) {
                                        navigate(afterLoginNavigation);
                                        dispatch(redirectAfterLogin(null))
                                    } else {
                                        navigate(`/`);
                                    }
                                }}
                            >Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Login
