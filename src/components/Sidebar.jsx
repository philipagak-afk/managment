import { Link } from "react-router";
import { MdHomeFilled } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { LuBoxes } from "react-icons/lu";
import { FaCog } from "react-icons/fa";
import SignoutModal from "./signoutModal";

function Sidebar() {
  const links = [
    {
      title: "Home",
      path: "",
      icon: <MdHomeFilled/>
    },
    {
      title: "Products",
      path: "products",
      icon: <FiBox />
    },
    {
      title: "Categories",
      path: "categories",
      icon: <LuBoxes />
    },
    {
      title: "Settings",
      path: "settings",
      icon: <FaCog/>
    },
  ]

  return <aside className="sidebar">
  <h3>Logo</h3>
  <ul>
      {links.map((link)=>(
      <li key={link.title}>
        <Link to={link.path}>{link.icon}{link.title}</Link>
      </li>
    ))}
  </ul>
  {/* <button onClick={handleSignOut}>Sign Out</button> */}
  <SignoutModal/>
  </aside>;
}

export default Sidebar;