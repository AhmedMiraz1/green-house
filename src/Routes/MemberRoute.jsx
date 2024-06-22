import { Navigate, useLocation } from "react-router-dom";
import UseMember from "../hooks/UseMember";
import useAuth from "../hooks/useAuth";


const MemberRoute = ({children}) => {
    const { user, loading } = useAuth();


  const [isAdmin, isAdminLoading] = UseMember();
  const location = useLocation();

  if (loading || isAdminLoading)
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    );

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default MemberRoute;