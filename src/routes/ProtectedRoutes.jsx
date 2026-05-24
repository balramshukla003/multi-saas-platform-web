import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth/AuthProvider";

const ProtectedRoute = ({ module }) => {
    console.log(object)
    const { user, isLoggedIn } = useAuth();
    console.log(user)

    // Check Login
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    // Check Module Permission
    const hasModuleAccess = user?.user.products?.some((product) => product.moduleName?.includes(module));
    if (!hasModuleAccess) {
        // Redirect to first allowed module
        const firstModule = user?.user.products?.[0]?.moduleName;
        return <Navigate to={`/${firstModule}/dashboard`} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;