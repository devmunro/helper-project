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

import { Link } from "react-router-dom";
import Search from "../SearchFilter/Search";

const NavBar = () => {
  return (

    <nav className="flex justify-around text-xl p-4 bg-blue-400 text-white">
      <Link to="/"><h1 className="font-bold p-4">Home</h1></Link>
      {/* Added Search Component here */}
      <Search />
      <ul className="flex justify-around p-4">
        <li className="mr-2 list-none">
          <Link to="/search">Search</Link>
        </li>
        <li className="mr-2 list-none">
          <Link to="/postjob">Post Job</Link>
        </li>
      </ul>
    </nav>

  );
};

export default NavBar;
