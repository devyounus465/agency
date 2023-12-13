import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const BoostSection = () => {
  return (
    <div className="py-20 bg-[#E8E0F1]">
      <div className="container flex flex-wrap items-center gap-12">
        <div className="lg:flex-1 space-y-6">
          <h2 className="text-5xl font-extrabold">
            SEO Boosts Web Traffic By Up To 100%
          </h2>
          <p>
            Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Ac
            tortor vitae purus faucibus. Sit amet commodo nulla facilisi nullam
            vehicula.
          </p>
          <ul className="space-y-3 text-md font-bold">
            <li>
              <FaCheckCircle className="inline text-[#5E2BA2]" /> Visitor
              Conversion Rate
            </li>
            <li>
              <FaCheckCircle className="inline text-[#5E2BA2]" /> Keyword
              Analysis
            </li>
            <li>
              <FaCheckCircle className="inline text-[#5E2BA2]" /> Web Site
              Optimization
            </li>
          </ul>
          <button className="btn px-6 bg-blue-600 rounded-full text-white">
            <Link>Read More</Link>
          </button>
        </div>
        <div className="lg:flex-1">
          <img src="https://i.ibb.co/f1PYShf/service.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BoostSection;
