import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateAuthRoute = ({ children }) => {
  const { token } = useSelector((store) => store.AuthReducer);
  const location = useLocation();

  console.log("location in privateRoute:", location);

  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateAuthRoute;
