import React from "react";
import { useSelector } from "react-redux";
import { Tab } from "semantic-ui-react";
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
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const user = users[auth];
  const answeredIds = Object.keys(user.answers);
  const answered = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return <Tab panes={panes({ answered, unanswered, users })} className="tab" />;
}

export default Dashboard;
