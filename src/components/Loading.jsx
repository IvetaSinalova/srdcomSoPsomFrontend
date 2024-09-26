import React from "react";

const Loading = () => {
  return (
    <div>
      <img src="logo_quido.png" alt="logo" />
      <div class="flex items-center justify-center min-h-screen">
        <div class="w-16 h-16 border-4 border-red border-dashed rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
