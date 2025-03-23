import React from "react";
import FuzzyText from "./not";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
        404
      </FuzzyText>
    </div>
  );
};

export default NotFound;
