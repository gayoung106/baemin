import Image from "next/image";
import React from "react";
import Search from "@/app/assets/icons/search.svg";
import Heart from "@/app/assets/icons/heart.svg";
import Home from "@/app/assets/icons/home.svg";
import Recipt from "@/app/assets/icons/recipt.svg";
import Smile from "@/app/assets/icons/smile.svg";

type IconType = {
  id: number;
  src: string;
  alt: string;
  desc: string;
};

const bottomNaviMenu: IconType[] = [
  { id: 1, src: Search, alt: "Search", desc: "검색" },
  { id: 2, src: Heart, alt: "Heart", desc: "찜" },
  { id: 3, src: Home, alt: "Home", desc: "홈" },
  { id: 4, src: Recipt, alt: "Recipt", desc: "주문내역" },
  { id: 5, src: Smile, alt: "Smile", desc: "my배민" },
];

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border rounded-t-xl shadow-md mx-1">
      <div className="flex w-full justify-between py-4 px-6">
        {bottomNaviMenu.map((item, index) => (
          <>
            <div
              key={index}
              className="flex flex-col text-center space-y-[2px]"
            >
              <span className="hover:cursor-pointer hover:-translate-y-2 transition duration-300 flex justify-center">
                <Image src={item.src} alt={item.alt} />
              </span>
              <div className="text-xs">{item.desc}</div>
            </div>
          </>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
