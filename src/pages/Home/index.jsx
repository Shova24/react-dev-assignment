import Collaborations from "../../components/HomePage/Collaborations";
import Companies from "../../components/HomePage/Companies";
import HeroSection from "../../components/HomePage/HeroSection";
import CustomerStories from "../../components/HomePage/CustomerStories";
import Tools from "../../components/HomePage/Tools";
import Work from "../../components/HomePage/Work";
import Report from "../../components/HomePage/Report";
import BrainStorming from "../../components/HomePage/BrainStorming";

const Home = () => {
  return (
    <div className="space-y-8 lg:space-y-2">
      {/* <div className="space-y-16 sm:space-y-20 md:space-y-24 2xl:space-y-32"> */}
      {/* navbar */}

      {/* herosection */}
      <HeroSection />

      {/* trustedby */}
      <Companies />

      {/* collaborations */}
      <Collaborations />

      {/* work */}
      <Work />

      {/* tools */}
      <Tools />

      {/* report */}
      <Report />

      {/* brainstorming */}
      <BrainStorming />

      {/* teams */}

      {/* Customer stories */}
      <CustomerStories />

      {/* footer  */}
    </div>
  );
};

export default Home;
