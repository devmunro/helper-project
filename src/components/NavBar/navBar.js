import { Link, useLocation } from "react-router-dom";

import LogoutButton from "../Account/logout";
import { UserAuth } from "../../context/AuthContext";
import Hamburger from "./hamburger";

const NavBar = () => {
  const { pathname } = useLocation(); // to hide searchbar and logout
  const { handleLogout } = UserAuth();

  return (
    <nav className="flex justify-end place-items-center text-lg p-1 bg-blue-400 text-white">
      <div className=" flex justify-end text-lg text-white md:visible collapse">
        <ul className="flex justify-around px-1">
          <li className="mr-3 list-none font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-3 list-none">
            <Link to="/account/search-help">Search</Link>
          </li>
          <li className="mr-3 list-none">
            <Link to="/account/post-help">Post Job</Link>
          </li>
          <li className="mr-3 list-none">
            <Link to="/account">Account</Link>
          </li>

          <li>
            {pathname !== "/" && pathname !== "/signup" && (
              <LogoutButton handleLogout={handleLogout} />
            )}
          </li>
        </ul>
      </div>
      <div className="  md:invisible">
        <Hamburger />
      </div>
    </nav>
  );
};

export default NavBar;
