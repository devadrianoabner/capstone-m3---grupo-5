import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Signup } from "../pages/register"
const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      {/* <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route> */}
      <Route path="/register">
        <Signup authenticated={authenticated} />
      </Route>
      {/* <Route path="/signin">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/dashboard">
        <Dashboard authenticated={authenticated} />
      </Route> */}
    </Switch>
  );
};

export default Routes;
