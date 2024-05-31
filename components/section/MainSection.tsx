import React from "react";

const MainSection = () => {
  return (
    <div className="h-full">
      <div className="flex">
        {[1, 2, 3].map((index: number) => (
          <div key={index}>Card</div>
        ))}
      </div>
      <div>Big Card</div>
      <div>banner Carousel</div>
      <div>icon menu horizen</div>
      <div>우리동네 빠른 배달</div>
    </div>
  );
};

export default MainSection;
