import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const { user, userLogOut } = useContext(AuthContext);

  const handLogout = () => {
    userLogOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/services"}>Services</Link>
      </li>
      <li>
        <Link to={"/shop"}>Shop</Link>
      </li>
      <li>
        <Link to={"/register"}>SignUp</Link>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img
            className="w-44"
            src="https://i.ibb.co/Bsy8HV5/logo.webp"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a className="bg-red-500 text-white" onClick={handLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <button className="btn btn-sm bg-blue-500 text-white">
              <Link to={"/login"}>Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
