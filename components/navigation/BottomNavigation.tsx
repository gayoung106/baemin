"use client";
import Image from "next/image";
import React from "react";
import Search from "@/app/assets/icons/search.svg";
import Heart from "@/app/assets/icons/heart.svg";
import Home from "@/app/assets/icons/home.svg";
import Recipt from "@/app/assets/icons/recipt.svg";
import Smile from "@/app/assets/icons/smile.svg";
import Link from "next/link";

type IconType = {
  id: number;
  src: string;
  alt: string;
  desc: string;
  href: string;
};

const bottomNaviMenu: IconType[] = [
  { id: 1, src: Search, alt: "Search", desc: "검색", href: "" },
  { id: 2, src: Heart, alt: "Heart", desc: "찜", href: "" },
  { id: 3, src: Home, alt: "Home", desc: "홈", href: "/" },
  { id: 4, src: Recipt, alt: "Recipt", desc: "주문내역", href: "/bill" },
  { id: 5, src: Smile, alt: "Smile", desc: "my배민", href: "" },
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
              <Link href={item.href}>
                <span className="hover:cursor-pointer hover:-translate-y-2 transition duration-300 flex justify-center">
                  <Image src={item.src} alt={item.alt} />
                </span>
              </Link>
              <div className="text-xs">{item.desc}</div>
            </div>
          </>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
