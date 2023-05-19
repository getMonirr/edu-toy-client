import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // use context
  const { user, loading } = useAuth();

  // location
  const location = useLocation();

  // check loading
  if (loading) {
    return <p>Loading...</p>;
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
