import "./App.css";
import Navigation from "./components/Navigation";
import SideBanner from "./components/SideBanner";

function App() {
  return (
    <div className="flex">
      <SideBanner />
      <Navigation />
    </div>
  );
}

export default App;
