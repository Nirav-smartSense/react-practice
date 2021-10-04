import Routes from "./routes";
import {BrowserRouter as Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route>
        <Switch>
      <Routes />
      </Switch>
      </Route>
    </div>
  );
}

export default App;
