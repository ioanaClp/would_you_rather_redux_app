import React, { useEffect } from "react";
import Nav from "./components/Nav";
import NewQuestion from "./components/NewQuestion";
import Login from "./components/Login";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import { Routes, Route } from "react-router-dom";
import { handleInitialData } from "./actions/shared";
import { useDispatch, useSelector } from "react-redux";
import NotFoundPage from "./components/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute";
import ViewPollPage from "./components/ViewPollPage";
import LoadingBar from "react-redux-loading";

const App = () => {
  const dispatch = useDispatch();
  const questions = useSelector((store) => store.questions);
  const loaded = Object.keys(questions).length > 0;

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <Nav />
      <LoadingBar />

      {loaded && (
        <Routes>
          <Route
            path="/"
            exact
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/add"
            element={
              <PrivateRoute>
                <NewQuestion />
              </PrivateRoute>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <PrivateRoute>
                <Leaderboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/questions/:questionId"
            element={
              <PrivateRoute>
                <ViewPollPage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
