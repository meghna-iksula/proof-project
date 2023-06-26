import Navigation from "./Navigation";
import SideBanner from "./SideBanner";
import SocialLinks from "./SocialLinks";

function Home() {
  return (
    <div className="lg:flex">
      <SideBanner />
      <Navigation />
      <SocialLinks />
    </div>
  );
}

export default Home;
