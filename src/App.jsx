import React from "react";
import "./styles/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registro from "pages/Registro";
import Login from "pages/Login";
import Admin from "pages/Admin";
import Index from "pages/Index";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registro">
            <Registro />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
