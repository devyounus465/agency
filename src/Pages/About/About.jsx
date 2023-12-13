import BoostSection from "../../Components/BoostSection/BoostSection";
import ServiceGoal from "../../Components/ServiceGoal/ServiceGoal";
import Services from "../../Components/Services/Services";
import Banner from "../../Shared/Banner/Banner";

const About = () => {
  return (
    <div>
      <Banner pageTitle={"About Us"}></Banner>
      <ServiceGoal></ServiceGoal>
      <BoostSection />
      <Services />
    </div>
  );
};

export default About;
