import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { ListGroup, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Provider, useDataContext } from "./context";
import Credits from "./Credits";
import data, { isMine } from "./data";
import History from "./History";
import LangTree, { getTotalCount } from "./LangTree";
import RouterLink from "./RouterLink";
import { TransItem, Translation } from "./Translation";

const Language = (props: RouteComponentProps<{ id: string }>) => {
  const { lang } = useDataContext();
  const items = lang[props.match.params.id];
  if (items.length === 1) {
    return <TransItem item={items[0]} />;
  }

  const main = items.filter(t => !t.variant).sort((a, b) => a.index - b.index);
  const variants = items.filter(t => t.variant).sort((a, b) => a.index - b.index);

  return <ListGroup>
    {main.concat(variants)
      .map(it => <ListGroup.Item key={it.index} action as={RouterLink} href={'/show/' + it.index}>
        #{it.index} {it.variant && <i>{it.variant}</i>} {!it.name && isMine(it) ? "[my translation]" : it.name}
      </ListGroup.Item>)}
  </ListGroup>
};

const Sources = () => <div>TODO sources</div>;

const routes = [
  { path: "/sources", component: Sources, title: "Sources" },
  { path: "/history", component: History, title: "History" },
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
