
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
  
    <nav className="flex justify-around text-xl p-4 bg-blue-400 text-white">
      <Link to="/"><h1 className="font-bold p-4">Home</h1></Link>
      <ul className="flex justify-around p-4">
        <li className="mr-3 list-none">
            <Link to="/search-help">Search</Link>
        </li>
        <li className="mr-3 list-none">
            <Link to="/post-help">Post Job</Link>
        </li>
        <li className="mr-3 list-none">
            <Link to="/account">Account</Link>
        </li>
      </ul>
    </nav>

  );
};

export default NavBar;
