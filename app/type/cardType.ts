import { StaticImageData } from "next/image";

export type CardType = {
  title: string;
  description: string;
  imageURL: StaticImageData | string;
};

export type DeliveryCardContentsType = {
  title: string;
  imageURL: StaticImageData | string;
};
