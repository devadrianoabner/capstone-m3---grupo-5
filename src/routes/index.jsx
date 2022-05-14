import { Components } from "../pages/Components";
import { DashboardPrestador } from "../pages/dashboardPrestador";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/register";
import { IndexProposalClients } from "../components/indexProposalClients";

export const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route> */}

      <Route path="/register">
        <Signup />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/teste">
        <Components />
      </Route>

      <Route path="/admin">
        <DashboardPrestador />
      </Route>

      <Route path="/proposals">
        <IndexProposalClients />
      </Route>
    </Switch>
  );
};
