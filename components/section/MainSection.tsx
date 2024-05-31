import React from "react";
import MainCard from "../card/MainCard";
import { CardType } from "@/app/type/cardType";
import Beamin from "@/public/images/baemin.jpg";

const cardContents: CardType[] = [
  {
    title: "배달",
    description: "세상은 넓고 맛집은 없다",
    imageURL: Beamin,
  },
  { title: "B마트", description: "장보기도 더 빠르게", imageURL: Beamin },
  {
    title: "배민스토어",
    description: "배달은 지금 옵니다",
    imageURL: Beamin,
  },
];

const MainSection = () => {
  return (
    <div className="h-full">
      <div className="flex">
        {cardContents.map((value, index) => (
          <MainCard key={index} cardContents={value} />
        ))}
      </div>
    </div>
  );
};

export default MainSection;
