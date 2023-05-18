import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/abacus.png";
import useAuth from "../../../hooks/useAuth";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  // use context
  const { user } = useAuth();

  // nav items
  const navItems = (
    <>
      <li>
        <NavLink className="hover:bg-transparent text-edu-yellow" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-transparent hover:text-edu-yellow"
          to="/all-toys"
        >
          All Toys
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className="hover:bg-transparent hover:text-edu-yellow"
              to="/my-toys"
            >
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:bg-transparent hover:text-edu-yellow"
              to="/add-toy"
            >
              Add A Toy
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          className="hover:bg-transparent hover:text-edu-yellow"
          to="/blogs"
        >
          Blogs
        </NavLink>
      </li>
      <button className="btn bg-edu-yellow border-0 text-edu-primary hover:bg-edu-yellow hover:text-black transition py-0 block md:hidden">
        Sign Out
      </button>
    </>
  );

  return (
    <div className="bg-edu-nav ">
      <div className="navbar justify-between container mx-auto">
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1text-black md:text-white">
            {navItems}
          </ul>
        </div>
        <div className="navbar-center">
          <div className="dropdown">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl hover:bg-transparent"
          >
            <div className="flex gap-3 items-center justify-center bg-transparent">
              <img className="w-10" src={Logo} alt="logo" />
              <p className="text-edu-bg text-2xl md:text-3xl font-edu-baloo logo-title bg-transparent hover:text-edu-yellow transition">
                Edu Toy
              </p>
            </div>
          </Link>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              {user?.displayName && (
                <Tooltip
                  style={{ backgroundColor: "#FDEA45", color: "#B92D5E" }}
                  anchorSelect=".show-user-name"
                  place="left"
                >
                  {user?.displayName}
                </Tooltip>
              )}
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar mr-4 hover:bg-edu-secondary"
              >
                <div className="w-10 rounded-full show-user-name">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <button className="btn bg-edu-yellow border-0 text-edu-primary hover:bg-edu-yellow hover:text-black transition py-0 hidden md:block">
                Sign Out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn bg-edu-yellow border-0 text-edu-primary hover:bg-edu-yellow hover:text-black transition py-0"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
