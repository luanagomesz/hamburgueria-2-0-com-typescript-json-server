import { Route, Switch, useHistory } from "react-router-dom";
import { Register } from "../Pages/Register";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";

function Routes() {
  const history = useHistory();

  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>

      <Route path="/register">
        <Register />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
