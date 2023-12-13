import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Strategies = () => {
  return (
    <div className="py-20 ">
      <div className="container flex flex-wrap lg:flex-row-reverse items-center gap-12">
        <div className="lg:flex-1 space-y-6">
          <h2 className="text-5xl font-extrabold">
            Strategies, Skills, & Tools Used In Digital Marketing
          </h2>
          <p>
            Arcu felis bibendum ut tristique et. Eget magna fermentum iaculis eu
            non diam phasellus. Volutpat sed cras ornare arcu dui vivamus.
            Consequat nisl vel pretium lectus quam id. Faucibus in ornare quam
            viverra orci sagittis eu volutpat odio.
          </p>
          <ul className="space-y-3 text-md font-bold">
            <li>
              <FaCheckCircle className="inline text-[#5E2BA2]" /> SEO Services
            </li>
            <li>
              <FaCheckCircle className="inline text-[#5E2BA2]" /> SMO
            </li>
            <li>
              <FaCheckCircle className="inline text-[#5E2BA2]" /> Web
              Optimizationt
            </li>
            <li>
              <FaCheckCircle className="inline text-[#5E2BA2]" /> Content
              Development
            </li>
          </ul>
          <button className="btn px-6 bg-blue-600 rounded-full text-white">
            <Link>Learn More</Link>
          </button>
        </div>
        <div className="lg:flex-1">
          <img src="/src/assets/service.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Strategies;
