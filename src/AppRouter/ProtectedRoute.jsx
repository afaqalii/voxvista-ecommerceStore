import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../utils/Spinner/Spinner";

const ProtectedRoute = ({ redirectPath = "/", children, roles }) => {
  const { isAuthenticated, isLoading } = useSelector((store) => store.auth);
  let location = useLocation();
  // if auth loading
  if (isLoading) {
    return (
      <div className="grid place-content-center h-[80vh]">
        <Spinner />
      </div>
    );
  }

  // if user is not authenticated
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }
  // if user is authenticated but not contains provided roles
  //   if (roles && !containsAllRoles(roles, user?.roles)) {
  //     return (
  //       <Navigate to={"/access-denied"} replace state={{ from: location }} />
  //     );
  //   }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
