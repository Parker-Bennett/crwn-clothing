import "./App.css";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";

function hatspages() {
  return (
    <div className="">
      <h1>HATS PAGE</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={hatspages} />
      </Switch>
    </div>
  );
}

export default App;
