import { Components } from "../pages/Components";
import { DashboardPrestador } from "../pages/dashboardPrestador";
import { Route, Switch } from "react-router-dom";
import { IndexProposalClients } from "../components/indexProposalClients";
import { IndexProposalCookers } from "../components/indexProposalCooker";
import { IndexAllProposals } from "../components/indexAllProposals";

import Login from "../pages/login";
import Signup from "../pages/register";
import { Diets } from "../pages/diets";
import { DashBoardClient } from "../pages/dashboardClient";
import { CookAcceptedProposals } from "../pages/cookAcceptedProposals";

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

      <Route path="/dashboard">
        <DashBoardClient />
      </Route>

      <Route path="/admin">
        <DashboardPrestador />
      </Route>

      <Route path="/diets">
        <Diets />
      </Route>

      <Route path="/proposals-clients">
        <IndexProposalClients />
      </Route>

      <Route path="/proposals-cookers">
        <IndexProposalCookers />
      </Route>

      <Route path="/all-proposals">
        <IndexAllProposals />
      </Route>

      <Route path="/new-diet">
        <IndexAllProposals />
      </Route>

      <Route path="/questions-cookers">
        <>Pág de perrguntas frequentes cozinheiro</>
      </Route>

      <Route path="/questions-clients">
        <>Pág de perrguntas frequentes cozinheiro</>
      </Route>

      <Route path="/support">
        <>Pág de suporte</>

      <Route path="/cook-accepted-proposals">
        <CookAcceptedProposals />
      </Route>
    </Switch>
  );
};
