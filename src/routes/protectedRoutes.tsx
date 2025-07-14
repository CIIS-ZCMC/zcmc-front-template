import React from 'react'
import { useLocation } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import {useAuthStore} from "@/stores/authStore";

const ProtectedRoutes = ({ children, requiredRoles = [] }: { children: React.ReactNode, requiredRoles: string[] }) => {
    const { auth } = useAuthStore();
    const location = useLocation();
  
    if (!auth) {
      return <Navigate to="/welcome" state={{ from: location }} replace />;
    }
  
    if (requiredRoles.length > 0 && !requiredRoles.includes(auth.role)) {
      return (
        <Navigate
          to={location.state?.from?.pathname || "/"}
          state={{
            from: location,
            roleWarning: true,
          }}
          replace
        />
      );
    }
  
    return children || <Outlet />;
};

export default ProtectedRoutes;