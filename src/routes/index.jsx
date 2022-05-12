import { Route, Switch } from "react-router-dom";
import { Components } from "../pages/Components";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Components />
      </Route>
    </Switch>
  );
};
