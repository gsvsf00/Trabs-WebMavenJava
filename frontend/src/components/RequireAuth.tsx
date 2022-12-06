import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const RequireAuth = ({
  allowedRoles,
  redirectUrl = "/filmes"
}: {
  allowedRoles?: string[];
  redirectUrl?: string;
}) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  return currentUser && allowedRoles?.includes(currentUser?.role) ? (
    <Outlet />
  ) : (
    <Navigate to={redirectUrl} state={{ from: location }} replace />
  );
};

export default RequireAuth;
