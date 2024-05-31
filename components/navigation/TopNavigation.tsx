"use client";

import Image from "next/image";
import Search from "@/app/assets/icons/search.svg";
import ArrowDown from "@/app/assets/icons/arrow_down.svg";
import Square from "@/app/assets/icons/square.svg";
import Bell from "@/app/assets/icons/bell.svg";
import Cart from "@/app/assets/icons/cart.svg";

export default function TopNavigation() {
  return (
    <nav>
      <div className="flex flex-col w-full justify-center items-center border rounded-b-xl bg-[#2AC1BC]">
        <div className="flex justify-between w-full mt-6 p-2">
          {/* address */}
          <div className="flex">
            <p className="text-white font-semibold truncate max-w-60">
              서울시 성북구 오패산로 46, 두산위브 106-1003호
            </p>
            <button>
              <span>
                <Image src={ArrowDown} alt="arrow down" />
              </span>
            </button>
          </div>
          {/* icon tray */}
          <div className="flex gap-4 text-white">
            <span>
              <Image src={Square} alt="menu" />
            </span>
            <span>
              <Image src={Bell} alt="bell" />
            </span>
            <span>
              <Image src={Cart} alt="cart" />
            </span>
          </div>
        </div>
        {/* search bar */}
        <div className="flex justify-center w-full p-2">
          <span className="flex pl-2 w-1/7 justify-center items-center inset-4 bg-white rounded-l-sm z-0">
            <Image className="w-4 h-4" src={Search} alt="search" />
          </span>
          <input
            className="w-full rounded-r-sm p-2 mr-8  outline-none "
            placeholder="치즈쭈꾸미 나와라 뚝딱"
          />
        </div>
      </div>
    </nav>
  );
}
