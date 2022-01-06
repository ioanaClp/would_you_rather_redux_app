import React, { useEffect } from "react";
import Nav from "./components/Nav";
import NewQuestion from "./components/NewQuestion";
import Login from "./components/Login";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import {
  Routes,
  Route,
} from "react-router-dom";
import { handleInitialData } from "./actions/shared";
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData())
  }, [])

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
