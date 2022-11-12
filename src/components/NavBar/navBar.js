import { Link, useLocation } from "react-router-dom";
import Search from "../SearchFilter/Search";

const NavBar = () => {
  const { pathname } = useLocation(); // to hide searchbar and logout



  
    return (
      <nav className="flex justify-around text-xl p-4 bg-blue-400 text-white">
        <Link to="/">
          <h1 className="font-bold p-4">Home</h1>
        </Link>
        {/* Added Search Component here */}
        {pathname !== "/" && pathname !== "/signup" && <Search />}
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
