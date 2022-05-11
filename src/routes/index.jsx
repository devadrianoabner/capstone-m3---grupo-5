import { Switch, Route } from "react-router-dom";
import NavigationBar from "../pages/NavigationBar";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/nav">
        <NavigationBar />
      </Route>
    </Switch>
  );
};
export default Routes;
