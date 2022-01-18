import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Login } from "./components/Login";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { NotFound } from "./pages/errors/Error404page";
import Nav from "./components/Nav";
import { PrivateRoute } from "./core/components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import NewPool from "./components/NewPoll";
import LeaderBoard from "./components/LeaderBoard";
import Question from "./components/Question";
import { loadUser } from "./redux/actions";
import { loadQuestions } from "./redux/actions";
import Loader from "./core/loader/Loader";

function App(props) {
  const { auth } = props;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!auth) {
      dispatch(loadUser()).then(() =>
        dispatch(loadQuestions()).then(() => {
          setLoading(false);
        })
      );
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout auth={auth} />}>
          <Route path="/" element={<PrivateRoute Component={Dashboard} />} />
          <Route path="add" element={<PrivateRoute Component={NewPool} />} />
          <Route
            path="leaderboard"
            element={<PrivateRoute Component={LeaderBoard} />}
          />
          <Route
            path="/questions/:question_id"
            element={<PrivateRoute Component={Question} />}
          />
        </Route>
        <Route
          path="/questions/undefined_id"
          element={<Navigate to="/404" />}
        />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
  );
}

const Layout = (props) => {
  debugger;
  const { auth } = props;
  return (
    <div>
      {auth && <Nav />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(App);
