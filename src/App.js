import React from 'react';
import { HashRouter, Route, Switch} from "react-router-dom";

import Book from "./views/book";
import Home from "./views/home";
import Memo from "./views/memo";


const App = () => {
  return (
    <HashRouter>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/book" component={Book} />
      <Route exact path="/memo" component={Memo} />
      </Switch>
    </HashRouter>
  );
}

export default App;