import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import { FidgetSpinner } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  // use context
  const { user, loading } = useAuth();

  // location
  const location = useLocation();

  // check loading
  if (loading) {
    return (
      <div className="flex justify-center items-center my-32">
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={["#ff0000", "#00ff00", "#0000ff"]}
          backgroundColor="#F4442E"
        />
      </div>
    );
  }

  // check user
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.any,
};
