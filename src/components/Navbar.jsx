import { CgProfile } from "react-icons/cg";
import { Link } from "react-router";



function Navbar() {
  return (
    <nav className="navbar">
        <h4></h4>
        <Link to={"profile"}>
        <CgProfile/>
        </Link>
    </nav>
      
    
  )
}

export default Navbar
