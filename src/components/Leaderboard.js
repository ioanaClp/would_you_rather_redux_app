import React from 'react'
import { useSelector } from 'react-redux'
import UserInfoCard from "./UserInfoCard"

const Leaderboard = () => {
    const users = useSelector(store => store.users)

    return (
        <div>
            {Object.values(users)
                .map(user => {
                    user.score = Object.keys(user.answers).length + user.questions.length
                    return user;
                }).sort((a, b) => b.score - a.score)
                .map((user, index) => <UserInfoCard key={user.id} position={index + 1} user={user} />)}
        </div>
    )
}

export default Leaderboard
