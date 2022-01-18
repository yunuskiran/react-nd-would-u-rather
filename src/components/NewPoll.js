import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Form, Divider, Card } from "semantic-ui-react";
import { AddQuestion } from "../redux/actions/index";
import { useNavigate } from "react-router-dom";
import Loader from "../core/loader/Loader";

function NewPool(props) {
  const { auth } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");
  const users = useSelector((state) => state.users);
  const user = users[auth];

  function handleSubmit() {
    if (!optionOneText || !optionTwoText) {
      alert("please enter option");
      return;
    }

    new Promise((res, rej) => {
      setLoading(true);
      dispatch(AddQuestion(optionOneText, optionTwoText, user.id));
      setTimeout(() => res("success"), 1000);
    }).then(() => {
      navigate("/");
      setLoading(false);
    });
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <Card centered fluid>
      <Card.Content>
        <Card.Header className="ui block top attached left aligned header">
          Create a New Poll
        </Card.Header>
        <Grid padded>
          <Grid.Column>
            <p>
              <strong>Would you rather...</strong>
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Input
                id="option1"
                placeholder="Enter option one..."
                value={optionOneText}
                onChange={(event) => setOptionOneText(event.target.value)}
                required
              />
              <Divider horizontal>Or</Divider>
              <Form.Input
                id="option2"
                value={optionTwoText}
                onChange={(event) => setOptionTwoText(event.target.value)}
                placeholder="Enter option two..."
                required
              />
              <Divider></Divider>
              <Form.Button positive size="large" fluid>
                Submit
              </Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  );
}

export default NewPool;
