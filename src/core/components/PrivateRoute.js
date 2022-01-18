import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { Grid } from "semantic-ui-react";

export const PrivateRoute = ({ Component }) => {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();
  if (auth) {
    return (
      <ConentLayout>
        <Component auth={auth} />
      </ConentLayout>
    );
  } else {
    return (
      <Navigate
        to="/login"
        replace
        state={{ path: location.pathname }}
      />
    );
  }
};

const ConentLayout = ({ children }) => (
  <Grid padded="vertically" columns={1} centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 600 }}>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);
