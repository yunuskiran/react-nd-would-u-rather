import React from "react";
import { useNavigate } from "react-router";
import { Card, Image, Button, Grid } from "semantic-ui-react";

export const DetailCard = (props) => {
  let navigate = useNavigate();
  const { question, users, isAnswered } = props;

  return (
    <Card key={question.id} centered fluid>
      <Card.Content>
        <Card.Header className="ui block top attached left aligned header">
          <b>{question.author} asks:</b>
        </Card.Header>
        <Card.Description>
          <Grid divided padded>
            <Grid.Row>
              <Grid.Column width={5}>
                <Image size="huge" src={users[question.author].avatarURL} />
              </Grid.Column>
              <Grid.Column width={11}>
                {question.optionOne.text}
                <br /> or
                <br />
                {question.optionTwo.text}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Grid>
          <Grid.Column textAlign="center">
            {!isAnswered ? (
              <Button
                color="green"
                size="large"
                fluid
                onClick={() => navigate(`/questions/${question.id}`)}
              >
                Answer
              </Button>
            ) : (
              <Button
                color="blue"
                size="large"
                fluid
                onClick={() => navigate(`/questions/${question.id}`)}
              >
                Result
              </Button>
            )}
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  );
};
