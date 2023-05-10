import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import GirisYap from "./components/GirisYap";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <FirstPage />

          <Route path="/girisyap">
            <GirisYap />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
