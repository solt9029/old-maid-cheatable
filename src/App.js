import { Route, Router, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Game from "./pages/Game";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <>test</>} />
        <Route exact path="/game" component={Game} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
