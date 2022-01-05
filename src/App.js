import React from "react";
import Nav from "./components/Nav";
import NewQuestion from "./components/NewQuestion";
import UserInfoCard from "./components/UserInfoCard";
import Login from "./components/Login";
import QuestionCard from "./components/QuestionCard";
import HomePollCard from "./components/HomePollCard";
import ResultCard from "./components/ResultCard";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/add' element={<NewQuestion />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
