import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./components/Dashboard";
import Banners from "./pages/Banners";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import AdminProtectedRoute from "./components/AdminProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 👇 Redirect root */}
        <Route path="/" element={<Navigate to="/admin/login" />} />

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route element={<AdminProtectedRoute />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/banners" element={<Banners />} />
          <Route path="/admin/gallery" element={<Gallery />} />
          <Route path="/admin/projects" element={<Projects />} />
          <Route path="/admin/contact" element={<Contact />} />
          <Route path="/admin/profile" element={<Profile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
