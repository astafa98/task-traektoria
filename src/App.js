import "./App.css";
import { MainPage } from "./components/MainPage/MainPage.jsx";
import Map from "./components/MapComponent/MapComponent.jsx";

function App() {
  return (
    <div className="App">
      <MainPage />
      <div style={{ width: "100%", height: "100%" }}>
        <Map />
      </div>
    </div>
  );
}

export default App;
