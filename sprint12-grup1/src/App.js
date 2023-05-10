import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Kaydol from "./components/Kaydol";
import GirisYap from "./components/GirisYap";
import FirstPage from "./components/FirstPage";

function App() {
  return (
    <div className="App">
      <FirstPage />

      <GirisYap />
    </div>
  );
}

export default App;
