import { Outlet } from "react-router";
import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
