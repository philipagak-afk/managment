import Sidebar from "../components/sidebar";

function Layout() {
  return (
    <div className="layout">
      <Sidebar/>
        <main className="main">Outlet</main>
      
    </div>
  )
}

export default Layout
