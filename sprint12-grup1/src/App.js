import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Kaydol from "./components/Kaydol";
import GirisYap from "./components/GirisYap";
import FirstPage from "./components/FirstPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <FirstPage />

          <Route path="/girisyap">
            <GirisYap />
          </Route>
          <Route path="/kaydol">
            <Kaydol />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
