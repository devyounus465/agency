import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="flex items-center h-screen bg-gray-100 "
      style={{
        background: 'url("https://i.ibb.co/4VT6vjW/hero.png")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
      }}
    >
      <div className="container">
        <div className="w-full lg:w-6/12 space-y-4 ">
          <h2 className="text-5xl font-extrabold">
            Boost Sales With A Strong E-Commerce Platform
          </h2>
          <p>
            With an optimized platform, you can reach a wider audience,
            streamline the purchasing process, and provide a better customer
            experience.
          </p>
          <button className="btn px-6 bg-blue-600 rounded-full text-white">
            <Link>Know More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
