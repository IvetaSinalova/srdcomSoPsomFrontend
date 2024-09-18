import React from "react";

const TitleImage = ({ text, imageName }) => {
  return (
    <div>
      <div className="relative">
        <img
          className="relative top-0 left-0 object-cover overflow-hidden -z-10"
          style={{ maxHeight: "700px", width: "100vw" }}
          src={`/${imageName}`}
          alt={imageName}
        />
        <div className="flex justify-center">
          <div className="custom-font option-title image-title absolute bg-white text-black text-center flex justify-center -z-10">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleImage;
