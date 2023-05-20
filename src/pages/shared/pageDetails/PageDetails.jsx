import useBreadcrumbs from "use-react-router-breadcrumbs";
import bgImg from "../../../assets/bannerImg.jpg";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const PageDetails = ({ title, children }) => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div
      className="hero min-h-[200px] lg:min-h-[300px]"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-[#ffffffe6]"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="lg:max-w-md">
          <h1 className="mb-5 text-4xl lg:text-6xl font-bold text-black font-edu-baloo ">
            {title}
          </h1>
          <div className="form-control lg:w-[500px] mx-auto">
            <div className="mb-8">{children}</div>
            <div className="text-black mx-auto">
              <div className="text-sm breadcrumbs bg-edu-primary px-4 text-white">
                <ul>
                  {breadcrumbs.map(({ match, breadcrumb }) => (
                    <li key={match.pathname}>
                      <NavLink className="mr-4" to={match.pathname}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 mr-2 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                          ></path>
                        </svg>
                        {breadcrumb}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;

PageDetails.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
