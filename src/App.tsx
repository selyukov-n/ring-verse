import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter, HashRouter, Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import cls from "classnames";

import css from "./App.module.css";

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

const cssNav = {
  link: "nav-link",
  navbarBrand: "navbar-brand",
  navbarNav: "navbar-nav",
  navbarText: "navbar-text",
};

function App() {
  const treeProps = useTreeState();

  const counts = getTotalCount(data.lang);
  const locale = loadLocale();

  const Router: typeof React.Component = process.env.REACT_APP_ROUTER === "hash" ? HashRouter : BrowserRouter;
  return (
    <Provider value={data}>
      <Router>
        <Navbar>
          <Link to="/" className={cssNav.navbarBrand}>Ring Verse</Link>
          <Nav>
            {routes.map(r => <Link key={r.path} to={r.path} className={cssNav.link}>{r.title}</Link>)}
          </Nav>
          <div className={cls(cssNav.navbarNav, css.right)}>
            <LanguageSelector current={locale} />
            <span className={cssNav.navbarText}>
              {messages.header.total}: <span className={css.counts}>{counts.me} / {counts.count}</span>
            </span>
          </div>
        </Navbar>
        <div className={css.main}>
          <Switch>
            <Route path="/" exact render={props => <LangTree {...props} {...treeProps} />}/>
            <Route path="/show/:id" component={Translation}/>
            <Route path="/lang/:id" component={Language} />
            {routes.map(r => <Route key={r.path} {...r} />)}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
