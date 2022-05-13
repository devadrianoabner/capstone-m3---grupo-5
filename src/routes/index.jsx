import { Components } from "../pages/Components";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/register";

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
      {/*
      <Route path="/dashboard">
        <Dashboard authenticated={authenticated} />
      </Route> */}
    </Switch>
  );
};
