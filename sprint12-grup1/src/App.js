import Kaydol from "./components/Kaydol";
import GirisYap from "./components/GirisYap";
import FirstPage from "./components/FirstPage";
import "./App.css";
import { Route, Switch, Router } from "react-router

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/girisyap">
            <GirisYap />
          </Route>
          <Route path="/kayitol">
            <Kaydol />
          </Route>
          <Route path="/">
            <FirstPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
