import React from "react";

const Loading = () => {
  return (
    <div class="flex items-center justify-center flex-col content-height">
      {/* <img
        className="pb-4"
        src="logo_quido.png"
        alt="logo"
        style={{ width: "100px" }}
      /> */}
      <div class="w-16 h-16 border-t-4 border-r-4 border-red rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
