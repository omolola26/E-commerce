import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const user = false;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register" exact>
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
