import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
  const isAdmin = localStorage.getItem("admin");

  return isAdmin ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default AdminProtectedRoute;
