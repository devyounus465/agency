import "./banner.css";

const Banner = ({ pageTitle }) => {
  return (
    <div className="banner">
      <div className="container flex items-center justify-between py-16 ">
        <div>
          <h2 className="text-5xl font-extrabold text-white">{pageTitle}</h2>
          <hr className="w-16 mt-5 border-4 " />
        </div>
        <div>
          <img
            width={150}
            src="https://i.ibb.co/0YFgBWn/business-concept-with-rocket-500px-2-min.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
