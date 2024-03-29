import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

// import website_logo from "../../../../src/assets/website_logo.png";

const Header = () => {
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/instructors">Offers</Link>
      </li>
      <li>
        <Link to="/allclasses">Categories</Link>
      </li>
      <li>
        <Link to="/dashboard">About</Link>
      </li>
      <li>
        <Link to="/login">Contact</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar z-10 dark:bg-slate-900 max-w-screen-xl mx-auto  text-amber-800 rounded-lg">
        <div className="navbar-start">
          <div className="dropdown z-20">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow  text-amber-800 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img src="#" alt="" />
            AnonnoTa Chocolate
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        <div className="navbar-end">
          <>
            <button className="btn bg-amber-800   border-0 ml  hover:bg-yellow-600 text-white font-bold hover:text-black">
              <Link to="/login">Login</Link>
            </button>
            <button className="btn   bg-amber-800  text-white hover:bg-yellow-600  border-0 ml-2  font-bold dark:hover:text-white hover:text-black">
              <Link to="/signup">Sign Up</Link>
            </button>
          </>
        </div>
      </div>
    </>
  );
};

export default Header;
