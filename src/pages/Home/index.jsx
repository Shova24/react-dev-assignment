import BrainStorming from "../../components/HomePage/BrainStorming";
import Collaborations from "../../components/HomePage/Collaborations";
import Companies from "../../components/HomePage/Companies";
import CustomerStories from "../../components/HomePage/CustomerStories";
import HeroSection from "../../components/HomePage/HeroSection";
import Report from "../../components/HomePage/Report";
import Teams from "../../components/HomePage/Teams";
import Tools from "../../components/HomePage/Tools";
import Work from "../../components/HomePage/Work";

const Home = () => {
  return (
    <div className="space-y-8 lg:space-y-2">
      <HeroSection />

      <Companies />

      <Collaborations />

      <Work />

      <Tools />

      <Report />

      <BrainStorming />

      <Teams />

      <CustomerStories />
    </div>
  );
};

export default Home;
