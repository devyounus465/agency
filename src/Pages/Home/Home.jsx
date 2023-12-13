import BoostSection from "../../Components/BoostSection/BoostSection";
import Hero from "../../Components/Hero/Hero";
import ServiceGoal from "../../Components/ServiceGoal/ServiceGoal";
import Services from "../../Components/Services/Services";
import Strategies from "../../Components/Strategies/Strategies";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <ServiceGoal></ServiceGoal>
      <Services />
      <BoostSection />
      <Strategies />
      <Testimonials />
    </div>
  );
};

export default Home;
