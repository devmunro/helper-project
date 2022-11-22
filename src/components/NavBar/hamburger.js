import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import LogoutButton from "../Logout/logout";
import { UserAuth } from "../../context/AuthContext";

export default function Hamburger() {
  const { pathname } = useLocation(); // to hide searchbar and logout
  const { handleLogout } = UserAuth();

  const burger = "https://cdn-icons-png.flaticon.com/512/3388/3388823.png"
  const close = "https://cdn3.iconfinder.com/data/icons/e-commerce-simple-ui-elements/100/TWalsh__close1-512.png"
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState(burger)

  const handleMenu = () => {
    if (open) {
      setOpen(false)
      setImage(burger)
    } else {
      setOpen(true)
      setImage(close)
    }

  }
  return (
    <div>
      <img onClick={handleMenu} className="w-16 mr-4 p-2 " alt="hamburger menu" src={image}></img>
      {open && <ul className="flex-col p-2 justify-end ">
        <li>
          <Link to="/">
            <h1 className="">Home</h1>
          </Link>
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
          {" "}
          {pathname !== "/" && pathname !== "/signup" && (
            <LogoutButton handleLogout={handleLogout} />
          )}
        </li>
      </ul>}
    </div>
  );
}
