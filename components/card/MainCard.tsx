import { CardType } from "@/app/type/cardType";
import Image from "next/image";

interface MainCardProps {
  cardContents: CardType;
}

export default function MainCard({ cardContents }: MainCardProps) {
  return (
    <div className="relative w-full p-2 justify-between gap-2 ">
      <div className="p-2 bg-white h-32 rounded-xl">
        <div className="flex flex-col w-full">
          <h2 className="text-xl font-bold">{cardContents.title}</h2>
          <p className="w-28">{cardContents.description}</p>
        </div>
      </div>
      <Image
        src={cardContents.imageURL}
        alt={cardContents.title}
        width={720}
        height={720}
        className="bg-slate-500 rounded-full w-8 h-8 absolute right-4 bottom-4"
      />
    </div>
  );
}
