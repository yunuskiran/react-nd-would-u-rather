import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab } from "semantic-ui-react";
import { loadQuestions } from "../redux/actions";
import Loader from "../core/loader/Loader";
import Question from "./Question";

const panes = (props) => {
  const { answered, unanswered } = props;
  return [
    {
      menuItem: "Unanswered",
      render: () => (
        <Tab.Pane>
          {unanswered.map((unAnsweredItem) => (
            <Question
              key={unAnsweredItem.id}
              question_id={unAnsweredItem.id}
              isAnswered={false}
            />
          ))}
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Answered",
      render: () => (
        <Tab.Pane>
          {answered.map((answeredItem) => (
            <Question
              key={answeredItem.id}
              question_id={answeredItem.id}
              isAnswered={true}
            />
          ))}
        </Tab.Pane>
      ),
    },
  ];
};

function Dashboard(props) {
  const { auth } = props;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const user = users[auth];
  useEffect(() => {
    dispatch(loadQuestions()).then(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    const answeredIds = Object.keys(user.answers);
    const answered = Object.values(questions)
      .filter((question) => answeredIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);
    const unanswered = Object.values(questions)
      .filter((question) => !answeredIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);

    return (
      <Tab panes={panes({ answered, unanswered, users })} className="tab" />
    );
  }
}

export default Dashboard;
