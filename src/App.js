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
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Route path='/' exact component={Home} />
      <Route path='/add' component={NewQuestion} />
      <Route path='/leaderboard' component={Leaderboard} />
    </div>
  );
}

export default App;
