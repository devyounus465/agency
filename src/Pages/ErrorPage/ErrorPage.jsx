import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container">
      <div className="flex items-center h-screen">
        <div className="flex-1 space-y-3">
          <h2 className="text-5xl font-extrabold">
            Sorry, But Nothing Was Found
          </h2>
          <h3 className="text-2xl font-bold">Please Try Again</h3>
          <p>You can click the button below to return to the home page!</p>
          <button className="btn btn-lg bg-[#004FB6] text-white">
            <Link to={"/"}>Back to Home</Link>
          </button>
        </div>
        <div className="flex-1">
          <img src="https://i.ibb.co/HxZsq4k/404-page-error.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
