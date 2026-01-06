import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("admin", true);
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={login}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Login as Admin
      </button>
    </div>
  );
};

export default AdminLogin;
