import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Provider } from "./context";
import data from "./data";
import LangTree, { getTotalCount } from "./LangTree";

const Translation = (props: RouteComponentProps<{ id: string }>) => <div>TODO {props.match.params.id}</div>;
const Language = (props: RouteComponentProps<{ id: string }>) => <div>TODO {props.match.params.id}</div>;
const Sources = () => <div>TODO sources</div>;
const Stats = () => <div>TODO stats</div>;
const Credits = () => <div>TODO (or not TODO ?)</div>;

const routes = [
  { path: "/sources", component: Sources, title: "Sources" },
  { path: "/stats", component: Stats, title: "Stats" },
  { path: "/credits", component: Credits, title: "Credits" },
];

function App() {
  const counts = getTotalCount(data.lang);
  return (
    <Provider value={data}>
      <BrowserRouter>
        <Navbar>
          <Link to="/" className="navbar-brand">Ring Verse</Link>
          <Nav>
            {routes.map(r => <Link key={r.path} to={r.path} className="nav-link">{r.title}</Link>)}
          </Nav>
          <div style={{ marginLeft: "auto" }}>
            <span className="navbar-text">Всего:&nbsp;</span>
            {counts.me} / {counts.count}
          </div>

        </Navbar>
        <div className="main">
          <Switch>
            <Route path="/" exact component={LangTree}/>
            <Route path="/show/:id" component={Translation}/>
            <Route path="/lang/:id" component={Language} />
            {routes.map(r => <Route key={r.path} {...r} />)}
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
