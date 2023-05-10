import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import GirisYap from "./components/GirisYap";

function App() {
  return (
    <div className="App">
      <FirstPage />
      <Switch>
        <Route path="/girisyap">
          <GirisYap />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
