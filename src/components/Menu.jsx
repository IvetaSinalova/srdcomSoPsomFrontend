import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ currentPath, closeMenu }) => {
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowItems(true);
    }, 100);
  }, []);

  return (
    <div className="menu custom-font">
      <Link to="/about" onClick={closeMenu}>
        <div
          className={`menu-item ${showItems ? "show" : "hide"} ${
            currentPath === "/about" ? "bg-red" : "bg-white"
          } px-4 py-2`}
        >
          O NÁS
        </div>
      </Link>
      <Link to="/canistherapy" onClick={closeMenu}>
        <div
          className={`menu-item ${showItems ? "show" : "hide"} ${
            currentPath === "/canistherapy" ? "bg-red" : "bg-white"
          } px-4 py-2`}
        >
          CANISTERAPIA
        </div>
      </Link>
      <Link to="/posts" onClick={closeMenu}>
        <div
          className={`menu-item ${showItems ? "show" : "hide"} ${
            currentPath === "/posts" ? "bg-red" : "bg-white"
          } px-4 py-2`}
        >
          ČLÁNKY
        </div>
      </Link>
      <Link to="/contact" onClick={closeMenu}>
        <div
          className={`menu-item ${showItems ? "show" : "hide"} ${
            currentPath === "/contact" ? "bg-red" : "bg-white"
          } px-4 py-2`}
        >
          KONTAKT
        </div>
      </Link>
    </div>
  );
};

export default Menu;
