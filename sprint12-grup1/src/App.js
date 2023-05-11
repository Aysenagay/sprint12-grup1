import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Kaydol from "./components/Kaydol";
import GirisYap from "./components/GirisYap";
import FirstPage from "./components/FirstPage";


function App() {
  return (
    <div className="App">
      <FirstPage />
      <Router>
        <Switch>
          <Route path="/girisyap">
            {" "}
            <GirisYap />{" "}
          </Route>
          <Route path="/kayitol">
            <Kaydol />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
