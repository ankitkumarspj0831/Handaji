import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./containers/home";
import AddNew from "./containers/add-new";
import Navigation from "./components/Navigation";

function App() {
  const routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create-new" component={AddNew} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <div className="App">
      <Navigation />
      {routes}
    </div>
  );
}

export default App;
