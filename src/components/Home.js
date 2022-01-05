import React from 'react'
import HomePollCard from './HomePollCard'
import { useState } from 'react'

const Home = () => {
    const [currentCategory, setCurrentCategory] = useState("unanswered")

    const handleShowAnsweredQuestions = () => {
        setCurrentCategory("answered")
    }

    const handleShowUnansweredQuestions = () => {
        setCurrentCategory("unanswered")
    }

    return (
        <div className="container mt-3">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a
                        className={`nav-link ${currentCategory === "unanswered" ? "active" : ""}`}
                        aria-current="page"
                        href="#"
                        onClick={() => handleShowUnansweredQuestions()}
                    >Unanswered Questions</a>
                </li>
                <li className="nav-item">
                    <a
                        className={`nav-link ${currentCategory === "answered" ? "active" : ""}`}
                        href="#"
                        onClick={() => handleShowAnsweredQuestions()}
                    >Answered Questions</a>
                </li>
            </ul>
            {
                currentCategory === "answered" ? <div>
                    <HomePollCard />
                    <HomePollCard />
                </div> : <div>
                    <HomePollCard />
                    <HomePollCard />
                    <HomePollCard />
                    <HomePollCard />
                </div>
            }

        </div >
    )
}

export default Home
