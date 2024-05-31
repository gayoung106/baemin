import Image from "next/image";
import ArrowRight from "@/public/assets/icons/arrow_right.svg";
import Beamin from "@/public/images/baemin.jpg";
import { DeliveryCardContentsType } from "@/app/type/cardType";

const DeliveryCardContents: DeliveryCardContentsType[] = [
  { imageURL: Beamin, title: "배민클럽" },
  { imageURL: Beamin, title: "돈까스/회" },
  { imageURL: Beamin, title: "피자" },
  { imageURL: Beamin, title: "중식" },
  { imageURL: Beamin, title: "치킨" },
  { imageURL: Beamin, title: "버거" },
  { imageURL: Beamin, title: "카페/디저트" },
  { imageURL: Beamin, title: "스타벅스" },
  { imageURL: Beamin, title: "홈플러스" },
  { imageURL: Beamin, title: "CU" },
];

export default function DeliveryCard() {
  return (
    <>
      <section className="flex flex-col  bg-white gap-1 m-2 p-2 rounded-lg">
        <div className="flex justify-between">
          <div className="flex gap-1">
            <h2 className="text-xl font-bold">배민배달</h2>

            <p className="text-sm font-medium m-auto">알뜰&middot;한집배달</p>
            <p className="text-sm font-light m-auto">알뜰배탈팁 0원</p>
          </div>
          <div className="flex items-center">
            <Image
              className="cursor-pointer hover:translate-x-1 hover:duration-75"
              src={ArrowRight}
              alt="더보기"
            />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4 py-4">
          {DeliveryCardContents.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
            >
              <Image
                className="rounded-full"
                width={48}
                height={48}
                src={item.imageURL}
                alt={item.title}
              />
              <p className="text-xs">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
