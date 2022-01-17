import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, setLogin } from "../redux/actions/index";
import {
  Grid,
  Header,
  Segment,
  Form,
  Button,
  Message,
} from "semantic-ui-react";
import { Navigate } from "react-router";
import Loader from "../core/loader/Loader";

export const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ hidden: true, content: "" });
  const users = useSelector((state) => state.users);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth) {
      dispatch(loadUser()).then(() => setLoading(false));
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function generateDropdownData() {
    return Object.values(users).map((user) => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL },
    }));
  }

  function handleSelection(e, data) {
    setUser(data.value);
  }

  function login() {
    if (!user) {
      setMessage({ hidden: false, content: "Please select a user" });
      return;
    } else {
      setMessage({ hidden: true, content: "" });
    }

    dispatch(setLogin(user));
  }

  return loading ? (
    <Loader />
  ) : auth ? (
    <Navigate to="home" />
  ) : (
    <ConentLayout>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column>
          <Header as="h2" color="teal" textAlign="center">
            Log-in to your account
          </Header>
          <Form size="large" onSubmit={login}>
            <Segment stacked>
              <Form.Dropdown
                placeholder="Select User"
                fluid
                selection
                options={generateDropdownData()}
                onChange={handleSelection}
              />
              <Button color="teal" fluid size="large">
                Login
              </Button>
              <Message hidden={message.hidden} negative>
                {message.content}
              </Message>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </ConentLayout>
  );
};

const ConentLayout = ({ children }) => (
  <Grid padded="vertically" columns={1} centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 450 }}>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);
