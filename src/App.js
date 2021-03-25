import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import Game from "./pages/Game";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={() => <>test</>} />
        <Route exact path="/game" component={Game} />
      </Switch>
    </HashRouter>
  );
}

export default App;
