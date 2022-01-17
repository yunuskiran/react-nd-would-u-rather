import React, { Fragment } from "react";
import { useNavigate } from "react-router";
import {
  Card,
  Grid,
  Image,
  Header,
  Progress,
  Button,
  Label,
  Segment,
} from "semantic-ui-react";

const VotesContainer = (props) => {
  const { optionVotesLenght, total, text, checked } = props;
  return (
    <Fragment>
      <Segment>
        {checked && (
          <Label as="a" color="green" ribbon="right">
            Voted
          </Label>
        )}
        <p style={{ fontWeight: "bold" }}>{text}</p>
        <Progress
          percent={((optionVotesLenght / total) * 100).toFixed(2)}
          progress
        >
          {optionVotesLenght} / {total} votes
        </Progress>
      </Segment>
    </Fragment>
  );
};

export function ResultCard(props) {
  const navigate = useNavigate();
  const { question, user } = props;
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const total = optionOneVotes + optionTwoVotes;
  return (
    <Card centered fluid>
      <Card.Header className="ui block top attached left aligned header">
        <h3>{question.author} Ask</h3>
      </Card.Header>
      <Card.Content>
        <Grid divided padded>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image size="huge" src={user.avatarURL} />
            </Grid.Column>
            <Grid.Column width={12}>
              <Header as="h3">Results:</Header>
              <VotesContainer
                checked={user.answers[question.id] === "optionOne"}
                optionVotesLenght={optionOneVotes}
                total={total}
                text={question.optionOne.text}
              />
              <VotesContainer
                checked={user.answers[question.id] === "optionTwo"}
                optionVotesLenght={optionTwoVotes}
                total={total}
                text={question.optionTwo.text}
              />
              <Grid.Column width={4}>
                <Button
                  size="medium"
                  floated="right"
                  onClick={() => navigate("/home")}
                >
                  Back to Home
                </Button>
              </Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  );
}
