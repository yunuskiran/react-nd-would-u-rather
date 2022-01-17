import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  Form,
  Grid,
  Header,
  Radio,
  Divider,
  Image,
} from "semantic-ui-react";
import { addAnswer } from "../redux/actions";

export function AnswerCard(props) {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const { question, user, auth } = props;
  const [selectedOption, setSelectedOption] = useState(null);

  function handleSelection(event, { value }) {
    setSelectedOption(value);
    setDisabled(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addAnswer(auth, question.id, selectedOption), []);
  }

  return (
    <Card centered fluid>
      <Card.Content>
        <Card.Header className="ui block top attached left aligned header">
          <h3>{question.author} Ask</h3>
        </Card.Header>
        <Card.Description>
          <Grid divided padded>
            <Grid.Row>
              <Grid.Column width={4}>
                <Image size="huge" src={user.avatarURL} />
              </Grid.Column>
              <Grid.Column width={12}>
                <Header as="h2" textAlign="left">
                  Would you rather
                </Header>
                <Form onSubmit={handleSubmit}>
                  <Form.Field>
                    <Radio
                      label={question.optionOne.text}
                      name="radioGroup"
                      value="optionOne"
                      checked={selectedOption === "optionOne"}
                      onChange={handleSelection}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label={question.optionTwo.text}
                      name="radioGroup"
                      value="optionTwo"
                      checked={selectedOption === "optionTwo"}
                      onChange={handleSelection}
                    />
                  </Form.Field>
                  <Divider />
                  <Form.Button primary size="large" fluid disabled={disabled}>
                    Save
                  </Form.Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
