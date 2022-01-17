import React from "react";
import { connect } from "react-redux";
import { Login } from "./components/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "./pages/errors/Error404page";
import Nav from "./components/Nav";
import { PrivateRoute } from "./core/components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import NewPool from "./components/NewPoll";
import LeaderBoard from "./components/LeaderBoard";
import Question from "./components/Question";

function App(props) {
  const { auth } = props;
  return (
    <div className="App">
      {auth ? <Nav /> : <></>}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="home" element={<PrivateRoute Component={Dashboard} />} />
        <Route path="add" element={<PrivateRoute Component={NewPool} />} />
        <Route
          path="leaderboard"
          element={<PrivateRoute Component={LeaderBoard} />}
        />
        <Route
          path="/questions/:question_id"
          element={<PrivateRoute Component={Question} />}
        />
        <Route
          path="/questions/undefined_id"
          element={<Navigate to="/home" />}
        />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(App);
