import React from "react";

const LineWithDots = ({ lineAtStart, color, width, height }) => {
  return (
    <div
      className={`line-with-dots ${
        lineAtStart ? "line-at-start" : "line-at-end"
      }`}
    >
      <div className="dots">
        <div
          className="dot"
          style={{ backgroundColor: color, width: height, height: height }}
        ></div>
        <div
          className="dot"
          style={{ backgroundColor: color, width: height, height: height }}
        ></div>
        <div
          className="dot"
          style={{ backgroundColor: color, width: height, height: height }}
        ></div>
      </div>
      <div
        className="lined"
        style={{ backgroundColor: color, width: width, height: height }}
      ></div>
    </div>
  );
};

export default LineWithDots;
