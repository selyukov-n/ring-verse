import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Provider } from "./context";
import Credits from "./Credits";
import data from "./data";
import History from "./History";
import { LanguageSelector, loadLocale, messages } from "./intl";
import LangTree, { getTotalCount, useTreeState } from "./LangTree";
import Language from "./Language";
import { Translation } from "./Translation";

const routes = [
  { path: "/history", component: History, title: messages.header.history },
  { path: "/credits", component: Credits, title: messages.header.credits },
];

function App() {
  const treeProps = useTreeState();

  const counts = getTotalCount(data.lang);
  const locale = loadLocale();
  return (
    <Provider value={data}>
      <BrowserRouter>
        <Navbar>
          <Link to="/" className="navbar-brand">Ring Verse</Link>
          <Nav>
            {routes.map(r => <Link key={r.path} to={r.path} className="nav-link">{r.title}</Link>)}
          </Nav>
          <div className="navbar-nav right">
            <LanguageSelector current={locale} />
            <span className="navbar-text">
              {messages.header.total}: <span className="counts">{counts.me} / {counts.count}</span>
            </span>
          </div>
        </Navbar>
        <div className="main">
          <Switch>
            <Route path="/" exact render={props => <LangTree {...props} {...treeProps} />}/>
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
