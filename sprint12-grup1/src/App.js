import "./App.css";
import FirstPage from "./components/FirstPage";
import GirisYap from "./components/GirisYap";
import { Kaydol } from "./components/Kaydol";
function App() {
  return (
    <div className="App">
      <FirstPage />

      <GirisYap />
      <Kaydol/>
    </div>
  );
}

export default App;
