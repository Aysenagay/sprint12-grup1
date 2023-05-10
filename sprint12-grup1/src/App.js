import "./App.css";
import FirstPage from "./components/FirstPage";
import GirisYap from "./components/GirisYap";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <FirstPage />
      <GirisYap />
    </div>
  );
}

export default App;
