import React, { useState, useEffect } from "react";

const Loading = () => {
  const [activePaw, setActivePaw] = useState(0); // Track which paw is fully visible

  // Cycle through paws every second
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePaw((prev) => (prev + 1) % 6); // Cycle through 6 paws
    }, 350);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Render two paws per call
  const pawItems = Array(6)
    .fill(0)
    .map((_, index) => (
      <div key={index} className={index % 2 === 0 ? "down" : "py-6 up"}>
        <img
          className="pb-4 loading-paw"
          src="paw.png"
          alt={`paw${index + 1}`}
          style={{
            opacity: activePaw === index ? 0.8 : 0.4, // Change opacity based on active paw
            transition: "opacity 0.5s ease", // Smooth transition effect
          }}
        />
      </div>
    ));

  return (
    <div className="flex items-center justify-center flex-col content-height">
      {/* Add flex-row-reverse to reverse the display order */}
      <div className="flex flex-row-reverse gap-6">{pawItems}</div>
    </div>
  );
};

export default Loading;
