import React from "react";

const MainSection = () => {
  return (
    <div className="h-full">
      <div className="flex">
        {[1, 2, 3].map((index: number) => (
          <div key={index}>Card</div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
