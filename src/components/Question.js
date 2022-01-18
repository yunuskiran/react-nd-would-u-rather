import React from "react";
import { connect } from "react-redux";
import { addAnswer } from "../redux/actions";
import { Navigate, useParams } from "react-router";
import { ResultCard } from "./ResultCard";
import { AnswerCard } from "./AnswerCard";
import { DetailCard } from "./DetailCard";

function Question(props) {
  const { question_id } = useParams();
  const { questions, users, auth } = props;
  if (!question_id) {
    const { question_id, isAnswered } = props;
    return (
      <DetailCard
        question={questions[question_id]}
        isAnswered={isAnswered}
        users={users}
      />
    );
  } else {
    let question = questions[question_id];
    let user = users[auth];
    if (!question) {
      return <Navigate to="/questions/undefined_id" replace />;
    }

    if (Object.keys(user.answers).indexOf(question_id) !== -1) {
      return (
        <ResultCard
          question={questions[question_id]}
          user={users[auth]}
          auth={auth}
        />
      );
    } else {
      return (
        <AnswerCard
          question={questions[question_id]}
          user={users[auth]}
          auth={auth}
        />
      );
    }
  }
}

function mapStateToProps(props) {
  const { auth, questions, users } = props;
  return {
    auth,
    questions,
    users,
  };
}

export default connect(mapStateToProps, { addAnswer })(Question);
