import React from 'react';
import { Route, RouteComponentProps, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const LangTree = () => <div>TODO tree</div>;
const Translation = (props: RouteComponentProps<{ id: string }>) => <div>TODO {props.match.params.id}</div>;
const Sources = () => <div>TODO sources</div>;
const Stats = () => <div>TODO stats</div>;
const Credits = () => <div>TODO (or not TODO ?)</div>;

const routes = [
  { path: "/sources", component: Sources, title: "Sources" },
  { path: "/stats", component: Stats, title: "Stats" },
  { path: "/credits", component: Credits, title: "Credits" },
];

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Navbar.Brand href="/">Ring Verse</Navbar.Brand>
        <Nav>
          {routes.map(r => <Nav.Link key={r.path} href={r.path}>{r.title}</Nav.Link>)}
        </Nav>
      </Navbar>
      <div className="main">
        <Switch>
          <Route path="/" exact component={LangTree}/>
          <Route path="/show/:id" component={Translation}/>
          {routes.map(r => <Route key={r.path} {...r} />)}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
