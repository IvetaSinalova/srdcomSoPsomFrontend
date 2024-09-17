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
        <div className="custom-font image-title absolute bg-white text-black text-center flex justify-center">
          {text}
        </div>
      </div>
    </div>
  );
};

export default TitleImage;
