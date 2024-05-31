import { StaticImageData } from "next/image";

export type CardType = {
  title: string;
  description: string;
  imageURL: StaticImageData | string;
};
