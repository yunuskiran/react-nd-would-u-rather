import React from "react";
import { connect } from "react-redux";
import { Login } from "./components/Login";
import { Routes, Route } from "react-router-dom";
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
      {auth ? <Nav /> : <div />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="home" element={<PrivateRoute Component={Dashboard} />} />
        <Route path="add" element={<PrivateRoute Component={NewPool} />} />
        <Route
          path="leader-board"
          element={<PrivateRoute Component={LeaderBoard} />}
        />
        <Route
          path="/questions/:question_id"
          element={<PrivateRoute Component={Question} />}
        />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(App);
