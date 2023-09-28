import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateAuthRoute = ({ children }) => {
  const { token } = useSelector((store) => store.AuthReducer);
  const location = useLocation();
  const [delay, setDelay] = useState(false);
  const toast = useToast();

  // console.log("location in privateRoute:", location);

  useEffect(() => {
    if (!token) {
      setTimeout(() => {
        setDelay(true);
      }, 1500);

      toast({
        title: "Please Login First",
        // description: "You have uccessfully Loged in",
        status: "info",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
    console.log("hello")
  }, [token]);

  if (!token) {
    return (
      delay && (
        <Navigate to="/login" state={{ redirectPath: location.pathname }} />
      )
    );
  }
  return children;
};

export default PrivateAuthRoute;
