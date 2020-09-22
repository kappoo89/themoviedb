import React from "react";
import AppList from "./pages/AppList";
import AppDetail from "./pages/AppDetail";
import "./assets/style/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:id">
          <AppDetail />
        </Route>
        <Route path="/">
          <AppList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
