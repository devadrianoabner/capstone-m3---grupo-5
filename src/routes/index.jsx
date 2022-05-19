import { DashboardPrestador } from "../pages/dashboardPrestador";
import { Route, Switch } from "react-router-dom";
import { IndexProposalClients } from "../components/indexProposalClients";
import { IndexAllProposals } from "../components/indexAllProposals";

import Login from "../pages/login";
import Signup from "../pages/register";
import { DashBoardClient } from "../pages/dashboardClient";
import { CookAcceptedProposals } from "../pages/cookAcceptedProposals";
import { ProposalsCookers } from "../pages/proposalsCookers";
import { Home } from "../pages/home";
import { UnderConstruction } from "../pages/pageUnderConstruction";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/register">
        <Signup />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/dashboard">
        <DashBoardClient />
      </Route>

      <Route path="/admin">
        <DashboardPrestador />
      </Route>

      <Route path="/proposals-clients">
        <IndexProposalClients />
      </Route>

      <Route path="/proposals-cookers">
        <ProposalsCookers />
      </Route>

      <Route path="/questions-cookers">
        <UnderConstruction />
      </Route>

      <Route path="/questions-clients">
        <UnderConstruction />
      </Route>

      <Route path="/support">
        <UnderConstruction />
      </Route>

      <Route path="/cook-accepted-proposals">
        <CookAcceptedProposals />
      </Route>

      <Route path="/under-construction">
        <UnderConstruction />
      </Route>
    </Switch>
  );
};
