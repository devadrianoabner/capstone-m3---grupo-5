import { Route, Switch } from "react-router-dom";
import { Components } from "../pages/Components";
import { DashboardPrestador } from "../pages/dashboardPrestador";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Components />
      </Route>

      <Route exact path="/admin">
        <DashboardPrestador />
      </Route>
    </Switch>
  );
};
