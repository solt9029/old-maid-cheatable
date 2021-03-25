import { Route, Router, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <>test</>} />
        <Route exact path="/help" component={() => <>help</>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
