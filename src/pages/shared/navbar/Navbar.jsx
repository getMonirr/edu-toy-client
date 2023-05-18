import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/abacus.png";

const Navbar = () => {
  // nav items
  const navItems = (
    <>
      <li className="text-white">
        <NavLink className="hover:bg-transparent text-edu-yellow" to="/">
          Home
        </NavLink>
        <NavLink
          className="hover:bg-transparent hover:text-edu-yellow"
          to="/all-toys"
        >
          All Toys
        </NavLink>
        <NavLink
          className="hover:bg-transparent hover:text-edu-yellow"
          to="/my-toys"
        >
          My Toys
        </NavLink>
        <NavLink
          className="hover:bg-transparent hover:text-edu-yellow"
          to="/add-toy"
        >
          Add A Toy
        </NavLink>
        <NavLink
          className="hover:bg-transparent hover:text-edu-yellow"
          to="/blogs"
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-edu-nav ">
      <div className="navbar justify-between container mx-auto">
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
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
              <p className="text-edu-bg text-3xl font-edu-baloo logo-title bg-transparent hover:text-edu-yellow transition">
                Edu Toy
              </p>
            </div>
          </Link>
        </div>

        <div className="navbar-end">
          <Link
            to="/login"
            className="btn bg-edu-yellow border-0 text-edu-primary hover:bg-edu-yellow hover:text-black transition"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
