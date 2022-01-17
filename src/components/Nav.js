import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Menu,
  Segment,
  Dropdown,
  Image,
  Icon,
} from "semantic-ui-react";
import { setLogin } from "../redux/actions/index";

const DropdownMenu = (props) => {
  const dispatch = useDispatch();
  const { user } = props;

  function logout() {
    dispatch(setLogin(null));
  }

  const trigger = (
    <span>
      <Image avatar src={user.avatarURL} /> Hello, {user.name}
    </span>
  );
  return (
    <Dropdown item simple className={"right"} trigger={trigger}>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => logout()}>
          <Icon name="lock" />
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

function Nav() {
  const auth = useSelector((state) => state.auth);
  const users = useSelector((state) => state.users);
  const user = users[auth];

  return (
    <Container>
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item name="home" as={NavLink} to="/" />
          <Menu.Item name="new poll" as={NavLink} to="/add" />
          <Menu.Item name="leader board" as={NavLink} to="/leader-board" />
          <Menu.Menu position="right">
            <DropdownMenu user={user} />
          </Menu.Menu>
        </Menu>
      </Segment>
    </Container>
  );
}

export default Nav;
