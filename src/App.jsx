import "./App.css";
import Navigation from "./components/Navigation";
import SideBanner from "./components/SideBanner";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="lg:flex">
      <SideBanner />
      <Navigation />
      <SocialLinks />
    </div>
  );
}

export default App;
