function Sidebar() {
  const links = [
    {
      title: "Home",
      path: "",
    },
    {
      title: "Products",
      path: "products",
    },
    {
      title: "Categories",
      path: "categories",
    },
    {
      title: "Settings",
      path: "settings",
    },
  ];
  return (
    <aside className="sidebar">
      <h3>logo</h3>
      <ul>
        {links.map((link) => (
          <li key={link.title}>
            <link to={link.path}></link>{link.title}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
