import BoostSection from "../../Components/BoostSection/BoostSection";
import ServiceGoal from "../../Components/ServiceGoal/ServiceGoal";
import Services from "../../Components/Services/Services";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Banner from "../../Shared/Banner/Banner";

const ServicePage = () => {
  return (
    <div>
      <Banner pageTitle={"Services"}></Banner>
      <Services />
      <BoostSection />
      <ServiceGoal />
      <Testimonials />
    </div>
  );
};

export default ServicePage;
