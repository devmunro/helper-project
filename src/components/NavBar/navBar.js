import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <h1>Helper</h1>
      <ul className="menu">
        <li className="menuLinks">
          <a href="">Help Out</a>
        </li>

        <li className="menuLinks">
          <a href="">Post Job</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
