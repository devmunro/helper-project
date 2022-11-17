import { Link, useLocation } from "react-router-dom";
import Search from "../SearchFilter/SearchBar";
import LogoutButton from "../Account/logout";
import { UserAuth } from "../../context/AuthContext";

const NavBar = () => {
  const { pathname } = useLocation(); // to hide searchbar and logout
  const { handleLogout } = UserAuth();

  return (
    <nav className="flex justify-end text-lg p-2 bg-blue-600 text-white">
      <Link to="/">
        <h1 className="font-bold p-4">Home</h1>
      </Link>
      {/* Added Search Component here */}
      {/* {pathname !== "/" && pathname !== "/signup" && <Search />} */}
      <ul className="flex justify-around p-4">
        <li className="mr-3 list-none">
          <Link to="/account/search-help">Search</Link>
        </li>
        <li className="mr-3 list-none">
          <Link to="/account/post-help">Post Job</Link>
        </li>
        <li className="mr-3 list-none">
          <Link to="/account">Account</Link>
        </li>
      </ul>
      {pathname !== "/" && pathname !== "/signup" && (
        <LogoutButton handleLogout={handleLogout} />
      )}
    </nav>
  );
};

export default NavBar;
