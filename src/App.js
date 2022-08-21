import { Route, Switch } from "react-router-dom";
import routes from "./routes";

const App = () => {
  return (
    <Switch>
      {routes.map((route) => {
        return <Route key={Date.now()} {...route} />;
      })}
    </Switch>
  );
};

export default App;
