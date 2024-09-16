import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import NavbarOption from "./NavbarOption";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [pathName, setPathName] = useState(location.pathname);
  useEffect(() => {
    const currentPathname = location.pathname;
    if (pathName !== currentPathname) {
      setPathName(currentPathname);
    }
  }, [location.pathname, pathName]);

  const navbarOption = (title, path) => {
    return (
      <div className={`navbar-option flex items-center`}>
        <div
          className={`flex items-center justify-center px-2 border-b-2${
            pathName === `/${path}`
              ? " text-red border-b-red"
              : "border-b-transparent"
          }`}
        >
          {title}
        </div>
      </div>
    );
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full py-4 shadow-md bg-white">
        <div className="flex justify-between text-center items-center px-12 cursor-pointer text-lg ">
          <Link to="/">
            <div className="flex items-center text-center justify-center">
              <img
                src="logo_quido.png"
                style={{ width: "80px" }}
                className="mr-4"
              />
              {navbarOption("Srdcom so psom", "")}
            </div>
          </Link>
          <div className="flex gap-6">
            <Link to="about">{navbarOption("O NÁS", "about")}</Link>
            <Link to="canistherapy">
              {navbarOption("CANISTERAPIA", "canistherapy")}
            </Link>
            <Link to="posts">{navbarOption("ČLÁNKY", "posts")}</Link>
            <Link to="contact">{navbarOption("KONTAKT", "contact")}</Link>
            <div className="flex justify-center items-center gap-3">
              <img
                src={`/facebook.png`}
                alt="facebook"
                style={{ height: "40px" }}
              />
              <img
                src={`/instagram.png`}
                alt="facebook"
                style={{ height: "40px" }}
              />
            </div>
          </div>
        </div>
      </nav>

      <div className="content px-8">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
