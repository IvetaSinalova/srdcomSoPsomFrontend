import React from "react";

const NavbarOption = ({ element, isSelected }) => {
  return (
    <div className="relative flex justify-center text-center items-center">
      {/* {isSelected && (
        <div className="absolute top-0 -translate-y-7  w-36">
          <img src="/circle.png" className="w-full" />
        </div>
      )} */}
      <div className="flex items-center text-center  justify-center">
        {element}
      </div>
    </div>
  );
};

export default NavbarOption;
