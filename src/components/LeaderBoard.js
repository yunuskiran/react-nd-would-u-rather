import React from "react";
import { useSelector } from "react-redux";
import { Card, Grid, Image, Header, Divider } from "semantic-ui-react";

function LeaderBoard() {
  const users = useSelector((state) => state.users);
  if (users) {
    let userCompositions = Object.values(users)
      .map((user) => ({
        key: user.id,
        text: user.name,
        value: user.id,
        image: { avatar: true, src: user.avatarURL },
        questionCount: user.questions.length,
        answerCount: Object.values(user.answers).length,
        total: Object.values(user.answers).length + user.questions.length,
      }))
      .sort((a, b) => b.total - a.total);
    return (
      <div>
        {userCompositions.map((user) => (
          <Card key={user.key} centered fluid>
            <Card.Content>
              <Card.Description>
                <Grid divided padded>
                  <Grid.Row>
                    <Grid.Column width={4}>
                      <Image size="huge" src={user.image.src} />
                    </Grid.Column>
                    <Grid.Column width={12}>
                      <Header as="h2" textAlign="left">
                        {user.text}
                      </Header>
                      <Grid>
                        <Grid.Column width={12}>Answered questions</Grid.Column>
                        <Grid.Column width={4}>{user.answerCount}</Grid.Column>
                      </Grid>
                      <Grid>
                        <Grid.Column width={12}>Created questions</Grid.Column>
                        <Grid.Column width={4}>
                          {user.questionCount}
                        </Grid.Column>
                      </Grid>
                      <Divider />
                      <Grid>
                        <Grid.Column width={12}>Total</Grid.Column>
                        <Grid.Column width={4}>{user.total}</Grid.Column>
                      </Grid>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </div>
    );
  } else {
    return <div>Nothing Found!</div>;
  }
}

export default LeaderBoard;
