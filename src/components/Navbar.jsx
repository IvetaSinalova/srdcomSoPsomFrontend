import React, { useState, useEffect, useRef } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
  const location = useLocation();
  const bgRef = useRef(null);
  const [hamburgerSelected, setHamburgerSelected] = useState(false);
  const [pathName, setPathName] = useState(location.pathname);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    window.scrollTo(0, 0);
    const currentPathname = location.pathname;
    if (pathName !== currentPathname) {
      setHamburgerSelected(false); // Close the menu when navigating
      setPathName(currentPathname);
    }
  }, [location.pathname, pathName, location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        hamburgerSelected &&
        bgRef.current &&
        bgRef.current.contains(event.target)
      ) {
        setHamburgerSelected(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);

      if (window.innerWidth > 800) {
        setHamburgerSelected(false);
      }
    };
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hamburgerSelected]);

  const closeMenu = () => {
    setHamburgerSelected(false);
  };

  const navbarOption = (title, path) => {
    return (
      <div className={`titles custom-font flex items-center`}>
        <div
          className={`flex items-center justify-center px-2 border-b-2${
            pathName === `/${path}` && !isMobile
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
      <nav className="fixed top-0 left-0 w-full shadow-md bg-white z-50">
        <div className="flex navbar justify-between text-center items-center cursor-pointer text-lg">
          <Link to="/">
            <div className="flex page-name items-center">
              <img src="logo_quido.png" className="navbar-logo" alt="logo" />
              <div
                className={`flex items-center pl-2 navbar-title flex-col pt-4 ${
                  pathName === "/" && !isMobile && " text-red "
                }`}
              >
                <div className="flex w-full justify-start leading-none">
                  SRDCOM
                </div>
                <div className="flex w-full justify-start leading-none">
                  SO PSOM
                </div>
              </div>
            </div>
          </Link>
          <div className="flex">
            <Link to="/about">{navbarOption("O NÁS", "about")}</Link>
            <Link to="/canistherapy">
              {navbarOption("CANISTERAPIA", "canistherapy")}
            </Link>
            <Link to="/offers">{navbarOption("PONUKA", "offers")}</Link>
            <Link to="/posts">{navbarOption("ČLÁNKY", "posts")}</Link>
            <Link to="/contact">{navbarOption("KONTAKT", "contact")}</Link>
            <div className="flex justify-center items-center gap-3">
              <img
                className="navbar-icon"
                src={`/facebook.png`}
                alt="facebook"
              />
              <img
                className="navbar-icon"
                src={`/instagram.png`}
                alt="instagram"
              />
            </div>
          </div>
          <button
            className="hamburger-menu"
            onClick={() => setHamburgerSelected((prevState) => !prevState)}
          >
            <img className="p-1" src={`/hamburger-black.png`} alt="hamburger" />
          </button>
        </div>
      </nav>

      <div className="flex justify-center items-center">
        <div>
          {hamburgerSelected && (
            <div>
              <div>
                <Menu currentPath={pathName} closeMenu={closeMenu} />
              </div>
              <div ref={bgRef} className="overlay" />
            </div>
          )}
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
