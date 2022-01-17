import React from "react";
import { Link } from "react-router-dom";
import { Grid, Header, HeaderSubheader, Icon } from "semantic-ui-react";

export function NotFound() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#83D9C8",
        }}
      >
        <Grid padded="vertically" columns={1} centered>
          <Grid.Row>
            <Grid.Column style={{ maxWidth: 300 }}>
              <img
                src="https://i.imgur.com/A040Lxr.png"
                alt="notfound"
                width={300}
                height={300}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column style={{ maxWidth: 400 }}>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginBottom: "15px",
                }}
              >
                <Header as="h2">
                  This Page is Lost in Space
                  <HeaderSubheader>
                    You thought this mission to the moon would be a quick six
                    month thing. Your neighbor offered to look after your dog.
                    Your high school math teacher was impressed. He once said
                    you wouldn’t amount to anything.You sure showed him. But now
                    here you are, fifty feet from your spaceship with no way to
                    get back. Your dog will be so sad. Your math teacher will be
                    so smug. Pretty devastating.
                  </HeaderSubheader>
                </Header>
                <Link to="/">
                  <Icon name="home" />
                  Go back to Home
                </Link>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}
