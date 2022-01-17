import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { Grid } from "semantic-ui-react";

export const PrivateRoute = ({ Component }) => {
  const auth = useSelector((state) => state.auth);

  if (auth) {
    return (
      <ConentLayout>
        <Component auth={auth} />
      </ConentLayout>
    );
  } else {
    return <Navigate to="/404" />;
  }
};

const ConentLayout = ({ children }) => (
  <Grid padded="vertically" columns={1} centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 600 }}>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);
