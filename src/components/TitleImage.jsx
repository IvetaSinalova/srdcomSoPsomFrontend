import React from "react";

const TitleImage = ({ text, imageName }) => {
  return (
    <div className="relative">
      <img
        className="top-0 left-0 object-cover overflow-hidden"
        style={{ maxHeight: "700px", width: "100vw" }}
        src={`/${imageName}`}
        alt={imageName}
      />
      <div className="flex justify-center">
        <div
          className="absolute bottom-10 bg-white text-black text-center py-5 px-10 w-3/4 flex justify-center"
          style={{ fontSize: "30px" }}
        >
          {/*tu sa bude text menit podla karty ktora sa rozklikne, a to iste aj obrazok */}
          {text}
        </div>
      </div>
    </div>
  );
};

export default TitleImage;
