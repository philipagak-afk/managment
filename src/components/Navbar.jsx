import { CgProfile } from "react-icons/cg";
import { Link, useLocation } from "react-router";



function Navbar() {
  const location = useLocation()

  const path = location.pathname === "/" ? "dashboard" : location.pathname.substring(1)
  return (
    <nav className="navbar">
        <h4>{path}</h4>
        <Link to={"profile"}>
        <CgProfile/>
        </Link>
    </nav>
      
    
  )
}

export default Navbar
