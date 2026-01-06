import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass =
    "block px-4 py-2 rounded hover:bg-blue-600 hover:text-white";

  return (
    <aside className="w-64 bg-slate-900 text-white p-4">
      <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

      <nav className="space-y-2">
        <NavLink className={linkClass} to="/admin/dashboard">Dashboard</NavLink>
        <NavLink className={linkClass} to="/admin/banners">Banners</NavLink>
        <NavLink className={linkClass} to="/admin/gallery">Gallery</NavLink>
        <NavLink className={linkClass} to="/admin/projects">Projects</NavLink>
        <NavLink className={linkClass} to="/admin/contact">Contact</NavLink>
        <NavLink className={linkClass} to="/admin/profile">Profile</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
